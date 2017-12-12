/**
 * createMenuList(data);
 * 功能：生成左侧菜单
 * 
 * 参数：
 * @data:菜单数据
 * 
 * template：
 * <div class="menu-item">
 *      <div class="menu-item-bd">
 *           <ul class="menu-list">
 *              <li>

                    <a href="javascript:">
                        <i class="iconfont">&#xe622;</i>最近</a>
                </li>
            </ul>
        </div>
    </div>
 */

function createMenuList(data, menuListBar) {
    //创建菜单结构
    var menu_html = '';
    for (key in data) {

        //生成菜单内的列表
        var list_html = '';
        for (var i = 0; i < data[key].length; i++) {
            list_html += '<li>' +

                ' <a href="javascript:" mark="'+data[key][i].markcode+'">' +
                '<i class="iconfont">' + data[key][i].icon + '</i>' + data[key][i].title + '</a>' +
                '</li>';


        }
        menu_html += '<div class="menu-item">' +
            '<div class="menu-item-bd">' +
            '<ul class="menu-list"> ' + list_html + '</ul>' +
            '</div>' +
            '</div>';

    }
    menuListBar.innerHTML = menu_html;

}

/**
 * createContentList(contentDate,contentListBar);
 * 功能：生成右侧内容的列表
 * 
 * 参数：
 * @contentDate:右侧内容列表的对应数据
 * @contentListBar:将右侧的内容列表放置的位置
 * 
 * template：
 * 
 * <li class="list-group-item">
    <div class="item-inner">
        <div class="list-item-tit">
            <div class="label">
                <i class="icon"></i>
            </div>
            <div class="iconw">
                <i class="iconfont iconw-img">&#xe621;</i>
            </div>
            <div class="info">
                <span>web</span>
            </div>
        </div>
        <div class="item-info">
            <span class="item-info-list">
                <span class="text-time">昨天09：46</span>
            </span>
            <span class="item-info-list">
                <span class="text-size">--</span>
            </span>
        </div>
    </div>
</li>
 * 
 */

function createContentList(contentDate, contentListBar) {
    if(!contentDate){
        console.log('内容不存在');
        contentListBar.innerHTML = '....内容不存在的显示方式....';
        return;
    }
    var content_html = '';
    for (var i = 0; i < contentDate.length; i++) {
        content_html += '<li class="list-group-item" mark="'+i+'">' +
            ' <div class="item-inner">' +
            ' <div class="list-item-tit">' +
            '<div class="label">' +
            ' <i class="icon"></i>' +
            '</div>' +
            ' <div class="iconw">' +
            ' <i class="iconfont iconw-img">&#xe621;</i>' +
            '</div>' +
            '<div class="info">' +
            '  <span>'+contentDate[i].title+'</span>' +
            '</div>' +
            ' </div>' +
            ' <div class="item-info">' +
            ' <span class="item-info-list">' +
            ' <span class="text-time">'+contentDate[i].editTime+'</span>' +
            ' </span>' +
            ' <span class="item-info-list">' +
            ' <span class="text-size">'+(contentDate[i].fileSize || '--')+'</span>' +
            '</span>' +
            ' </div>' +
            '</div>' +
            '</li>';

    }
    // console.log(content_html);
    contentListBar.innerHTML = content_html;
}

