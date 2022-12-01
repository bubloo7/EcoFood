import cv2
import io
import os
from google.cloud import vision
from google.cloud.vision_v1 import types
import pandas as pd
import re
import urllib.request

#Code for first function
def string_to_image(dataUrl):
    response = urllib.request.urlopen(dataUrl)
    with open('_server.jpg', 'wb') as f:
            f.write(response.file.read())

def splitImages(image_name):
    
    #split images takes in image filename and outputs five images as tuple    
    original_image = cv2.imread(image_name)

    #define refrence points for splitting images
    (h,w) = original_image.shape[:2]
    centerX,centerY = w // 2, (h//2)

    #make split images
    top_left_image = original_image[0:centerY, 0:centerX]
    top_right_image = original_image[0:centerY, centerX:w]
    bottom_left_image = original_image[centerY:h, 0:centerX]
    bottom_right_image = original_image[centerY:h, centerX:w]

    #show images
    
    return original_image, top_left_image,top_right_image, bottom_left_image, bottom_right_image

def possible_items_one_image(image_name):
    os.environ['GOOGLE_APPLICATION_CREDENTIALS']='key.json'
    client = vision.ImageAnnotatorClient()
    file_name = os.path.join(
    os.path.dirname(__file__),image_name)
    with io.open(file_name,'rb',) as image_file:
        content = image_file.read()
    image = types.Image(content=content)
    response = client.label_detection(image=image)
    labels = response.label_annotations
    list_of_possible_items = []

    for my_label in labels:
        list_of_possible_items.append(my_label.description)

    return list_of_possible_items

def possible_items_five_images(image_name):
    list_of_possible_items = []
    (im1,im2,im3,im4,im5) = splitImages(image_name)#splitImages outputs image for im.show
    image1,image2,image3,image4,image5 = 'im1.jpg','im2.jpg','im3.jpg','im4.jpg','im5.jpg'
    cv2.imwrite(image1, im1)
    cv2.imwrite(image2, im2)
    cv2.imwrite(image3, im3)
    cv2.imwrite(image4, im4)
    cv2.imwrite(image5, im5)
    list_1 = possible_items_one_image(image1)#possible_items_one_image function takes in .jpg. 
    list_2 = possible_items_one_image(image2)
    list_3 = possible_items_one_image(image3)
    list_4 = possible_items_one_image(image4)
    list_5 = possible_items_one_image(image5)
    #big list, make set
    my_list = set(list_1+list_2+list_3+list_4+list_5)
    my_final_list = list(my_list)
    #_______________________
    return my_final_list

def pluralize(noun):
    if re.search('[sxzo]$', noun):
         return re.sub('$', 'es', noun)
    elif re.search('[^aeioudgkprt]h$', noun):
        return re.sub('$', 'es', noun)
    elif re.search('[aeiou]y$', noun):
        return re.sub('y$', 'ies', noun)
    else:
        return noun + 's'

def modify_list(my_list):
    #add code to modify list here
    split_words_list = " ".join(my_list).split()
    for i in range(len(split_words_list)):
        if split_words_list[i].islower():
            split_words_list[i] = split_words_list[i].capitalize()        
        
        split_words_list.append("Poultry Meat") if split_words_list[i] == "Chicken" else None
        #add "others"
        split_words_list.append("Other Vegetables") if split_words_list[i] == "Vegetable" else None
        split_words_list.append("Other Fruit") if split_words_list[i] == "Fruit" else None
        split_words_list.append("Other Pulses") if split_words_list[i] == "Pulses" else None
        #add plurals
        split_words_list.append(pluralize(split_words_list[i]))
        split_words_list.append("Berries") if split_words_list[i] == "Berry" else None
        #add foods combined on csv file
        split_words_list.append("Berries & Grapes") if split_words_list[i] == "Berries" or split_words_list[i] =="Grapes" else None
        split_words_list.append("Lamb & Mutton") if split_words_list[i] == "Lamb" or split_words_list[i] =="Mutton" else None
        split_words_list.append("Onions & Leeks") if split_words_list[i] == "Onions" or split_words_list[i] =="Leeks" else None
        split_words_list.append("Wheat & Rye") if split_words_list[i] == "Wheat" or split_words_list[i] =="Rye" else None
    #get rid of duplicates
    temp_set = set(split_words_list)
    modified_list = list(temp_set)
    return modified_list

#Code for second function
def create_dictionaries1():
    
    fake_dict_from_GHG_csv = pd.read_csv('food_GHG.csv',usecols=["Entity","GHG emissions per kilogram (Poore & Nemecek, 2018)"],index_col=0).to_dict()
    dict_from_GHG_csv = fake_dict_from_GHG_csv["GHG emissions per kilogram (Poore & Nemecek, 2018)"]

    fake_dict_from_land_csv = pd.read_csv('food_land.csv',usecols=["Entity","Land use per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
    dict_from_land_csv= fake_dict_from_land_csv["Land use per kilogram (Poore & Nemecek, 2018)"]

    fake_dict_from_water_csv = pd.read_csv('food_water.csv',usecols =["Entity","Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
    dict_from_water_csv = fake_dict_from_water_csv["Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"]
    return dict_from_GHG_csv,dict_from_land_csv, dict_from_water_csv

def create_dictionaries2():
    dict_from_environmental = pd.read_csv('big_environmental.csv', usecols=["Entity","Emissions per kilogram","Land use per kilogram","Water withdrawals per kilogram"],index_col=3).to_dict()
    dict_from_GHG_csv = dict_from_environmental["Emissions per kilogram"]
    dict_from_land_csv = dict_from_environmental["Land use per kilogram"]
    dict_from_water_csv = dict_from_environmental["Water withdrawals per kilogram"]
    return dict_from_GHG_csv,dict_from_land_csv,dict_from_water_csv

def create_dictionaries():
    dict_from_GHG_csv1 = {}
    dict_from_land_csv1 = {}
    dict_from_water_csv1 = {}
    for key in create_dictionaries1()[0]:
        dict_from_GHG_csv1[key] = create_dictionaries1()[0][key]
        dict_from_land_csv1[key] = create_dictionaries1()[1][key]
        dict_from_water_csv1[key] = create_dictionaries1()[2][key]
    for key1 in create_dictionaries2()[0]:
        dict_from_GHG_csv1[key] = create_dictionaries2()[0][key]
        dict_from_land_csv1[key] = create_dictionaries2()[1][key]
        dict_from_water_csv1[key] = create_dictionaries2()[2][key]
    return dict_from_GHG_csv1,dict_from_land_csv1,dict_from_water_csv1

#Two main functions
#image_to_list takes the picture and gives a list of all possible items in the image
def image_to_list(image_name):
    list_of_possible_items = possible_items_five_images(image_name)
    return modify_list(list_of_possible_items)
    
#create_list_mathcing_database_with_possible_items takes a list of possible items 
# and gives a dictionary of stats for items found    
def create_list_matching_database_with_possible_items(list_of_possible_items):
    #remove leading and trailing whitespace from strings in list
    for i in range(len(list_of_possible_items)):
        list_of_possible_items[i] = list_of_possible_items[i].strip()
    (dict_for_GHG, dict_for_land, dict_for_water) = create_dictionaries() 
    list_of_items_w_values = []
    for x in list_of_possible_items:
        if x in dict_for_GHG:
            my_dict = {"name": x, "CO2":dict_for_GHG[x], "land": dict_for_land[x],"water":dict_for_water[x]}
            list_of_items_w_values.append(my_dict)
    return list_of_items_w_values


# my_image = "potato1.jpg"
# print(image_to_list(my_image))
# output = create_list_matching_database_with_possible_items(image_to_list(my_image))
# print ("\n \n Stats on", my_image,": \n",output)
items = ["Groundnuts"]

output = create_list_matching_database_with_possible_items(items)
print (output)