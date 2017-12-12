window.onload = function () {
    /**
      * 功能一、上传下载进度收缩展开
      * 
      * 
      * 1、鼠标划过边框颜色变成#bbbabf
      * 2、点击事件：
      *       1、如果任务列表没有展开则展开任务列表；
      *       2、如果任务列表展开了，则收起任务列表；
      *       3、图表颜色变成蓝色
      * 3、点击document时，如果任务列表展开，则收缩
      * 4、任务列表里有两个状态进行切换
      *      默认是进行中的list显示出来
      *       1、进行中
      *       2、已完成
      *       点击这两个tab框显示对应的list
     */
    var fileDown = document.querySelector('#mode-act');
    var fileBtn = document.querySelector('#filebtn');
    var modeList = document.querySelector('#mode-list .mode-tasks');

    /**
     * 2、点击事件：
     *       1、如果任务列表没有展开则展开任务列表；
     *       2、如果任务列表展开了，则收起任务列表；
     *       3、图表颜色变成蓝色
     */
    fileDown.onclick = function (ev) {
        var ev = ev || event;
        ev.cancelBubble = true;
        ev.stopPropagation();
        if (fileBtn.className == 'mode-act hide') {
            fileBtn.className = 'mode-act show';
            MTween({
                obj: modeList,
                attrs: {
                    width: '540px',
                    height: '432px'
                },
                duration: 100,
                way: 'bounceIn'

            });
        } else {
            fileBtn.className = 'mode-act hide';
            MTween({
                obj: modeList,
                begins: {},
                attrs: {
                    width: '0px',
                    height: '0px'
                },
                duration: 100,
                way: 'bounceIn'

            })
        }

    }
    //3、点击document时，如果任务列表展开，则收缩
    document.onclick = function () {
        fileBtn.className = 'mode-act hide';
        MTween({
            obj: modeList,
            begins: {},
            attrs: {
                width: '0px',
                height: '0px'
            },
            duration: 100,
            way: 'bounceIn'

        })
    }

    /*4、任务列表里有两个状态进行切换
    *      默认是进行中的list显示出来
    *       1、进行中
    *       2、已完成
    *       点击这两个tab框显示对应的list
            3、切换的时候蓝色的先跟着移动并执行动画
    */

    var tabsBox = document.querySelector('.mode-tasks');
    var modeTabBtn = document.querySelectorAll('.tab-list li');
    var modeTab = document.querySelectorAll('#mode-tab div');
    var tabLine = document.querySelector('.tab-list-line');
    // console.log(modeTabBtn);
    tab(modeTabBtn, modeTab)


    tabsBox.onclick = function (ev) {
        // console.logo(11);
        var ev = ev || event;
        ev.cancelBubble = true;
        ev.stopPropagation();
    }
    //问题一、如何将下面的线跟tab结合？？


    /**
     * 功能二、
     * 1、点击搜索input，宽度变加长；再加上mtween；
     * 2、失去焦点的时候，宽度变回原来的；
     * 2、输入文字进行检索，展示已经有的列表
     * 3、清除按钮点击清除所有的搜索列表
     * 4、点击搜索按钮生成一条搜索记录
     */
    var search = document.querySelector('#search');
    var searchBar = document.querySelector('.search-bar');
    var sListBar = document.querySelector('.search-list');


    // console.dir(search);
    search.onfocus = function () {
        MTween({
            obj: searchBar,
            begins: {},
            attrs: {
                width: '300px'
            },
            duration: 200,
            way: 'linear'
        })
        sListBar.className = 'search-list act';
        MTween({
            obj: sListBar,
            begins: {
                opacity: 0
            },
            attrs: {
                width: '300px',
                opacity: 1
            },
            duration: 200,
            way: 'linear'
        })
    }
    search.onblur = function () {
        inpuBlur();
    }
    function inpuBlur(ev) {
        var ev = ev || event;
        ev.cancelBubble = true;
        ev.stopPropagation();

        MTween({
            obj: searchBar,
            begins: {},
            attrs: {
                width: '260px'
            },
            duration: 200,
            way: 'linear'
        })

        sListBar.className = 'search-list';
        MTween({
            obj: sListBar,
            begins: {
                opacity: 1
            },
            attrs: {
                width: '260px',
                opacity: 0
            },
            duration: 400,
            way: 'linear'
        })
    }

    //4、点击搜索按钮生成一条搜索记录
    var sBtn = document.querySelector('.search-btn');
    var sListOul = document.querySelector('.menu-list');
    sBtn.onclick = function () {
        
        var lis = document.createElement('li');
        var span = document.createElement('span');
        var dspan = document.createElement('span');
        var icon = document.createElement('i');
        lis.className = 'menu-list-item';
        span.className = 'item-text';
        span.innerHTML = search.value;
        dspan.className = 'item-delate';
        icon.className = 'iconfont icon-delate';
        icon.innerHTML = '&#xe64e;';
        lis.appendChild(span);
        lis.appendChild(dspan);
        dspan.appendChild(icon);
        sListOul.appendChild(lis);
        var delate = document.querySelectorAll('.item-delate');
        // console.log(delate);
        //鼠标划过显示关闭的图标
        lis.onmouseover = function () {
            search.onblur = null;
            dspan.style.display = 'block';

        }
        //点击关闭图标，删除这条数据
        dspan.onclick = function (ev) {
            var ev = ev || event;
            ev.cancelBubble = true;
            ev.stopPropagation();

            sListOul.removeChild(this.parentNode);

            inpuBlur();
        }
        //鼠标划出图标隐藏
        lis.onmouseout = function () {
            inpuBlur();
            dspan.style.display = 'none';
        }
        //鼠标点击li的时候，input的value值变成li里span的值
        lis.onclick = function () {
            var sValue = document.querySelector('.item-text');
            search.value = sValue.innerHTML;
        }



    }

    //3、清除按钮点击清除所有的搜索列表

    var allDelate = document.querySelector('.menu-act');
    var historyBar = document.querySelector('.menu-group');
    historyBar.onmouseover = function () {
        search.onblur = null;
    }

    allDelate.onclick = function () {
        var dOlis = sListOul.querySelectorAll('li');
        for (var i = 0; i < dOlis.length; i++) {
            sListOul.removeChild(dOlis[i]);
        }
        inpuBlur();

    }









}

