import pandas as pd


fake_dict_from_GHG_csv = pd.read_csv('food_GHG.csv',usecols=["Entity","GHG emissions per kilogram (Poore & Nemecek, 2018)"],index_col=0).to_dict()
dict_from_GHG_csv = fake_dict_from_GHG_csv["GHG emissions per kilogram (Poore & Nemecek, 2018)"]
print(dict_from_GHG_csv["Apples"])

#write code to make dictionaries for land and water csv files
fake_dict_from_land_csv = pd.read_csv('food_land.csv',usecols=["Entity","Land use per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
dict_from_land_csv= fake_dict_from_land_csv["Land use per kilogram (Poore & Nemecek, 2018)"]
print(dict_from_land_csv["Apples"])


fake_dict_from_water_csv = pd.read_csv('food_water.csv',usecols =["Entity","Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"], index_col=0).to_dict()
dict_from_water_csv = fake_dict_from_water_csv["Freshwater withdrawals per kilogram (Poore & Nemecek, 2018)"]
print(dict_from_water_csv["Apples"])

