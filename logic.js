var classList = $("#class_list")
var styleList = $("#style_list")
var getClass = $("#get_class")
var getStyle = $("#get_style")
var setClass = $("#set_class")
var setStyle = $("#set_style")
var Client = $("#clie")

getClass.on('click', () => {
    classList.html(Client.attr('class'))
})

getStyle.on('click', () => {
    styleList.html(Client.attr('style'))
})

setClass.on('click', () => {
    Client.addClass('clie-x')
})

setStyle.on('click', () => {
    Client.attr('style', Client.attr('style') + "; background: pink")
})
