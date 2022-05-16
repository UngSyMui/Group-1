

var sizeElement = document.querySelector(".size-product");

function showSize() {
    sizeElement.innerHTML=" <label class=\"sizeitem\"><input type=\"checkbox\" name=\"options[]\" value=\"s\" /> S</label>\n" +
        "                        <label class=\"sizeitem\"><input  type=\"checkbox\" name=\"options[]\" value=\"m\" /> M</label>\n" +
        "                        <label class=\"sizeitem\"><input type=\"checkbox\" name=\"options[]\" value=\"l\" /> L</label>\n" +
        "                        <label class=\"sizeitem\"><input type=\"checkbox\" name=\"options[]\" value=\"s\" /> XL</label>\n" +
        "                        <label class=\"sizeitem\"><input type=\"checkbox\" name=\"options[]\" value=\"m\" /> XXL</label>";
}


var colorElement = document.querySelector(".box-color");
function showColor() {
    colorElement.innerHTML ="<div class=\"color-item color-vang\">\n" +
        "                            <input type=\"checkbox\" name=\"options[]\" value=\"vang\" />\n" +
        "                            <label class=\"fonthiden \">Vàng</label>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <div class=\"color-item color-xanh\">\n" +
        "                            <input type=\"checkbox\" name=\"options[]\" value=\"xanh\" />\n" +
        "                            <label class=\"fonthiden \">Xanh</label>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <div class=\"color-item color-do\">\n" +
        "                            <input type=\"checkbox\" name=\"options[]\" value=\"do\" />\n" +
        "                            <label class=\"fonthiden \">Đỏ</label>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <div class=\"color-item color-tim\">\n" +
        "                            <input  type=\"checkbox\" name=\"options[]\" value=\"tim\" />\n" +
        "                            <label class=\"fonthiden \">Tím</label>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"color-item color-dacam\">\n" +
        "                            <input  type=\"checkbox\" name=\"options[]\" value=\"dacam\" />\n" +
        "                            <label class=\"fonthiden \">Cam</label>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"color-item color-hong\">\n" +
        "                            <input  type=\"checkbox\" name=\"options[]\" value=\"hong\" />\n" +
        "                            <label class=\"fonthiden \">Hồng</label>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"color-item color-den\">\n" +
        "                            <input  type=\"checkbox\" name=\"options[]\" value=\"den\" />\n" +
        "                            <label class=\"fonthiden \">Đen</label>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"color-item color-nau\">\n" +
        "                            <input  type=\"checkbox\" name=\"options[]\" value=\"nau\" />\n" +
        "                            <label class=\"fonthiden \">Nâu</label>\n" +
        "                        </div>";
}

