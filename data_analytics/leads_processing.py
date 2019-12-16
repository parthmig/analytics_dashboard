# import libraries
import pandas as pd
import numpy as np

# create df for csv file
df = pd.read_csv('leads_revised.csv', delimiter=',', names=['serial_num', 'user_id', 'age', 'os_name', 'browser_name', 'app_vendor', 'source', 'city', 'region_code'])

# process df to make a list
df1 = df[['age', 'source']]
processed_list = df1.values.tolist()

# remove all na values from list
for i in processed_list[:5000]:
    if i[0] == str('(na)') or i[1] == str('No Answer'):
        processed_list.remove(i)

# make separate lists and counters for all age groups
list_for_17 = []
list_for_18 = []
list_for_25 = []
list_for_35 = []
list_for_45 = []
list_for_55 = []
list_for_65 = []

# set count to 0
count = 0

# append items to separate lists as per age
for j in processed_list:
    if j[0] == str('17_minus'):
        list_for_17.append(j)
        count +=1

    elif j[0] == str('18-24'):
        list_for_18.append(j)
        count +=1

    elif j[0] == str('25-34'):
        list_for_25.append(j)
        count +=1

    elif j[0] == str('35-44'):
        list_for_35.append(j)
        count +=1

    elif j[0] == str('45-54'):
        list_for_45.append(j)
        count +=1

    elif j[0] == str('55-64'):
        list_for_55.append(j)
        count +=1

    elif j[0] == str('65_plus'):
        list_for_65.append(j)
        count +=1

# list for desired age
ageList = []

# age group selected
age = input("Which age group would you like to look at? ")
# method will check only for the desired age
def listAge(age):

    # check for age and assign to age list for insights
    if age == str('17'):
        ageList = list_for_17
    elif age == str('18'):
        ageList = list_for_18
    elif age == str('25'):
        ageList = list_for_25
    elif age == str('35'):
        ageList = list_for_35
    elif age == str('45'):
        ageList = list_for_45
    elif age == str('55'):
        ageList = list_for_55
    elif age == str('65'):
        ageList = list_for_65  

    # counts for various channels
    countForTV = 0
    countForOnline = 0
    countForMag = 0
    countForSearch = 0
    countForApp = 0
    countForRec = 0
    countOther = 0

    # loop to check count of platforms
    for k in ageList:
        if k[1] == str('TV_Ads'):
            countForTV += 1
        elif k[1] == str('Online_Ads'):
            countForOnline += 1
        elif k[1] == str('Magazine/Newspaper'):
            countForMag += 1
        elif k[1] == str('Web_Search_engine'):
            countForSearch += 1
        elif k[1] == str('Appstore'):
            countForApp += 1
        elif k[1] == str('Recommendation'):
            countForRec += 1
        elif k[1] == str('Other'):
            countOther += 1
            
    return ageList

#function call
listAge(age)
