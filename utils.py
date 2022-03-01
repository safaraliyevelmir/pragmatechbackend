week_days = ['pass','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Cümə axşamı','Cümə','Şənbə','Bazar']




def week_day(numbers):
    text = "core/"
    list = [int(i) for i in str(numbers)]   
    for i in list:
        text = text + " " +  week_days[i]
    
    return text
