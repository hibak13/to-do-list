function add_item() {
    var add_item = document.getElementById("add_item")
    var to_do_list = document.getElementById("to-do-list")
    
    var list_item = document.createElement("li")
    list_item.setAttribute("class", "row")

    var span = document.createElement("span")
    span.setAttribute("class", "col-sm-9")
    var list_item_text = document.createTextNode(add_item.value)
    span.appendChild(list_item_text)
    
    var dlt_btn = document.createElement("button")
    dlt_btn.setAttribute("onclick", "delete_item()")
    dlt_btn.setAttribute("class", "btn-danger col-sm-2")
    var dlt_btn_text = document.createTextNode("Delete")
    dlt_btn.appendChild(dlt_btn_text)
    
    list_item.appendChild(span)
    list_item.appendChild(dlt_btn)

    to_do_list += to_do_list.appendChild(list_item)
    add_item.value = ""
}

function delete_item(){
    event.target.parentNode.remove();
}

function delete_all() {
    var to_do_list = document.getElementById("to-do-list")
    to_do_list.innerHTML = ""
}