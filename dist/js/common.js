"use strict";var cateArr=JSON.parse(localStorage.getItem("cart"));function setPage(n){var a='\n        <p>商品详情页面</p>\n        <div class="checkbox">\n            <label for="">\n                <input name="all" type="checkbox" value="">\n                全选\n            </label>\n            <label for="">\n                <input name="on" type="checkbox" value="">\n                不选\n            </label>\n            <label for="">\n                <input name="not" type="checkbox" value="">\n                反选\n            </label>\n        </div>\n    ';n.forEach(function(n,a){var o='\n        <a href="JavaScript:;" name="buCay">\n                <span class="iconfont icon-gouwuchekong"></span>购物车\n                <i>('.concat(a+1,")</i>\n        </a>\n        ");$(".header_tow_right").html(o)}),n.forEach(function(n){a+='\n    <div class="cmListShop">\n        <div class="cmListShop_ck">\n            <label for="">\n                <input name="checked" goods_id="'.concat(n.goods_id,'" type="checkbox" ').concat(!0===n.buy?"checked":"",'>\n            </label>\n        </div>\n        <div class="cmListShopImg">\n            <img src="').concat(n.goods_small_logo,'" alt="">\n        </div>\n        <div class="cmListShop_p">\n            <p>').concat(n.goods_name,"</p>\n            <i>￥").concat(n.goods_price,'</i>\n            <div class="cmListShop_p_a">\n                <a href="javascript:;" name="del" goods_id="').concat(n.goods_id,'" class="btn_x" role="button">删除商品</a>\n                <a href="javascript:;" name="lost" goods_id="').concat(n.goods_id,'"  class="btn_x" role="button" ').concat(1==n.num?"disabled":"",'>-</a>\n                <a href="javascript:;" class="btn_x" role="button">').concat(n.num,'</a>\n                <a href="javascript:;" name="odd" goods_id="').concat(n.goods_id,'" class="btn_x" role="button"').concat(n.num==n.goods_number?"disabled":"",">+</a>\n            </div>\n        </div>\n    </div>\n"),$(".classListShop").html(a)})}setPage(cateArr);