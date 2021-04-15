import requests

url = "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-001602-005"
api = requests.get(url)
records = api.json()["result"]["records"]

def get_api():
    names = []
    nums = []
    ranks = []
    for record in records:
        if record["age"] == "15~64歲":
            names.append(record["lastname"])
            nums.append(record["population"])
            ranks.append(record["ranking"])
    return names[0:], nums[0:], ranks[0:]