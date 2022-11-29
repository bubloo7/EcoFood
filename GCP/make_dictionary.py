import pandas as pd

def create_dictionaries():
    
    fake_dict_from_GHG_csv = pd.read_csv('food_GHG.csv',usecols=["Entity","GHG emissions per kilogram (Poore & Nemecek, 2018)"],index_col=0).to_dict()
    dict_from_GHG_csv = fake_dict_from_GHG_csv["GHG emissions per kilogram (Poore & Nemecek, 2018)"]

    fake_dict_from_land_csv = pd.read_csv('food_land.csv',usecols=["Entity","Land use per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
    dict_from_land_csv= fake_dict_from_land_csv["Land use per kilogram (Poore & Nemecek, 2018)"]

    fake_dict_from_water_csv = pd.read_csv('food_water.csv',usecols =["Entity","Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
    dict_from_water_csv = fake_dict_from_water_csv["Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"]
    return dict_from_GHG_csv,dict_from_land_csv, dict_from_water_csv


def create_dictionaries():
    dict_from_environmental = pd.read_csv('big_environmental.csv', usecols=["Entity","Emissions per kilogram","Land use per kilogram","Water withdrawals per kilogram"],index_col=3).to_dict()
    dict_from_GHG_csv = dict_from_environmental["Emissions per kilogram"]
    dict_from_land_csv = dict_from_environmental["Land use per kilogram"]
    dict_from_water_csv = dict_from_environmental["Water withdrawals per kilogram"]
    return dict_from_GHG_csv,dict_from_land_csv,dict_from_water_csv

print(dict_from_GHG_csv["Apples"])