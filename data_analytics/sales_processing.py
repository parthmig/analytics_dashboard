# import req libraries
import pandas as pd
import numpy as np

#df for all sales
df_sales = pd.read_csv('sales_revised.csv', delimiter=',', names = ['X1', 'is_first_sale', 'age', 'app_vendor',	'subscription', 'Sales1',	'Sales10',	'SalesAll'	'channel',	'campaign',	'Grouped Channel1',	'Discount',	'HDYH',	'city',	'price_eur'])

# process df and make list
df_sales1 = df_sales[['is_first_sale', 'HDYH', 'Discount', 'app_vendor']]
sales_list = df_sales1.values.tolist()

#remove all na values from list
for i in sales_list[:8000]:
    if i[0] == str('(na)') or i[0] == str('NA') or i[1] == str('NA') or i[1] == str('No Answer') or i[2] == str('NA'):
        sales_list.remove(i)

# separate lists and counters for all age groups
list_for_17 = []
count_for_17 = 0
list_for_18 = []
count_for_18 = 0
list_for_25 = []
count_for_25 = 0
list_for_35 = []
count_for_35 = 0
list_for_45 = []
count_for_45 = 0
list_for_55 = []
count_for_55 = 0
list_for_65 = []
count_for_65 = 0
count = 0

# append items to separate lists as per age
for j in sales_list:
    if j[0] == str('17_minus'):
        list_for_17.append(j)
        count_for_17 += 1
        count +=1

    elif j[0] == str('18-24'):
        list_for_18.append(j)
        count_for_18 += 1
        #print(count_for_18)
        count +=1

    elif j[0] == str('25-34'):
        list_for_25.append(j)
        count_for_25 += 1
        count +=1

    elif j[0] == str('35-44'):
        list_for_35.append(j)
        count_for_35 += 1
        count +=1

    elif j[0] == str('45-54'):
        list_for_45.append(j)
        count_for_45 += 1
        count +=1

    elif j[0] == str('55-64'):
        list_for_55.append(j)
        count_for_55 += 1
        count +=1

    elif j[0] == str('65_plus'):
        list_for_65.append(j)
        count_for_65 += 1
        count +=1

# print counts
print(' ')
print('Total Count:    ' , count)
print('Count for 17-   ', count_for_17)
print('Count for 18-24 ', count_for_18)
print('Count for 25-34 ', count_for_25)
print('Count for 35-44 ', count_for_35)
print('Count for 45-54 ', count_for_45)
print('Count for 55-64 ', count_for_55)
print('Count for 65-74 ', count_for_65)
print(' ')

# select age
age = input("Which age group would you like to look at? ")

# list for desired age
ageList = []

# method will check only for the desired age
def listAge(age):

    # check for age and assign to age list for insights
    if age == str('17-'):
        ageList = list_for_17
    elif age == str('18-24'):
        ageList = list_for_18
    elif age == str('25+'):
        ageList = list_for_25
    elif age == str('35+'):
        ageList = list_for_35
    elif age == str('45+'):
        ageList = list_for_45
    elif age == str('55+'):
        ageList = list_for_55
    elif age == str('65+'):
        ageList = list_for_65  

    # counts for various platforms
    countForTV = 0
    countForOnline = 0
    countForMag = 0
    countForSearch = 0
    countForApp = 0
    countForRec = 0
    countOther = 0
    countDisc = 0
    
    # count for sub duration
    subOne = 0
    subThree = 0
    subSix = 0
    subTwelve = 0

    # counts for various platforms given discount
    countForTV2 = 0
    countForOnline2 = 0
    countForMag2 = 0
    countForSearch2 = 0
    countForApp2 = 0
    countForRec2 = 0
    countOther2 = 0


    # loop to check count of platforms
    for k in ageList:
        if k[1] == str('TV_Ads'):
            countForTV += 1
        elif k[1] == str('Online_Ads'):
            countForOnline += 1
        elif k[1] == str('Magazine/Newspaper'):
            countForMag += 1
        elif k[1] == str('Web_Search_Engine'):
            countForSearch += 1
        elif k[1] == str('Appstore'):
            countForApp += 1
        elif k[1] == str('Recommendation'):
            countForRec += 1
        elif k[1] == str('Other'):
            countOther += 1 

    # print counts for channels
    print(' ')
    print("Count for TV             ", countForTV)
    print("Count for Online Ads     ", countForOnline)
    print("Count for Magazines      ", countForMag)
    print("Count for Web            ", countForSearch)
    print("Count for Appstore       ", countForApp)
    print("Count for Recommendation ", countForRec)
    print("Count for Others         ", countOther)
    print(' ')

    # loop through list for sub duration
    for l in ageList:
        if l[2] == str('Discount'):
            countDisc += 1
            if l[3] == str('1M1'):
                subOne += 1
            elif l[3] == str('3M3'):
                subThree += 1
            elif l[3] == str('6M6'):
                subSix += 1
            elif l[3] == str('12M12'):
                subTwelve += 1

    # loop through list for channel
    for d in ageList:
        if d[2] == str('Discount'):
            if d[1] == str('TV_Ads'):
                countForTV2 += 1
            elif d[1] == str('Online_Ads'):
                countForOnline2 += 1
            elif d[1] == str('Magazine/Newspaper'):
                countForMag2 += 1
            elif d[1] == str('Web_Search_Engine'):
                countForSearch2 += 1
            elif d[1] == str('Appstore'):
                countForApp2 += 1
            elif d[1] == str('Recommendation'):
                countForRec2 += 1
            elif d[1] == str('Other'):
                countOther2 += 1 
    
    # print counts for channel with discounts
    print("Amongst the people getting a discount: ")
    print("Count for TV             ", countForTV2)
    print("Count for Online Ads     ", countForOnline2)
    print("Count for Magazines      ", countForMag2)
    print("Count for Web            ", countForSearch2)
    print("Count for Appstore       ", countForApp2)
    print("Count for Recommendation ", countForRec2)
    print("Count for Others         ", countOther2)
    print(' ')

    print("In this age group ", subOne, " people bought a one month membership, ", subThree, " people bought a three month membership, ") 
    print(subSix , " people bought a six month membership, and ", subTwelve, " people bought a twelve month membership.")

    # return processed list
    return ageList

# function call
listAge(age)
