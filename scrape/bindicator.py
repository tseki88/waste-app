"not actually a python script"

Guideline:

Name:
items.forEach((d) => {
    d.childNodes[1]["textContent"]
})

Description:
items.forEach((d) => {
    d.childNodes[3]["textContent"]
})

Search:
items.forEach((d) => {
    d.childNodes[5].childNodes[4]["textContent"]
})

Tag:
items.forEach((d) => {
    d.childNodes[5].childNodes[0].childNodes[0].childNodes.forEach((e) => {
        let x = e.childNodes[0].attributes[1].nodeValue
        console.log(x)
    })
})

Category:
    document.getElementById("binCategory").value.split(",")[0]

SubCategory:
    document.getElementById("binSubCategory").options[document.getElementById("binSubCategory").options["selectedIndex"]]["innerText"]



Steps:

1. 
arrayOne = []

2. (repeat for every subCategory render)
items = document.querySelectorAll(".tbl-item")

items.forEach((d) => {
    let category = document.getElementById("binCategory").value.split(",")[0];
    let subCategory = document.getElementById("binSubCategory").options[document.getElementById("binSubCategory").options["selectedIndex"]]["innerText"];
    let name = d.childNodes[1]["textContent"]
    let description = d.childNodes[3]["textContent"]
    let search = d.childNodes[5].childNodes[4]["textContent"]
    let tag = []
    d.childNodes[5].childNodes[0].childNodes[0].childNodes.forEach((e) => {
        tag.push(e.childNodes[0].attributes[1].nodeValue)
    })

    let data = {
        name: name,
        description: description,
        search: search,
        tag: tag,
        category: category,
        subCategory: subCategory,
    }
    arrayOne.push(data)
})