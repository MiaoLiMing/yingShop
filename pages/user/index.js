Page({
    data: {
        background: [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3074462172,3531747313&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2371856254,1139469663&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2500849016,1857288125&fm=26&gp=0.jpg",
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        serveList: [
            {
                icon: "icon-qiaquan",
                title: "我的卡券",
            },
            {
                icon: "icon-huo",
                title: "我的活动",
            },
            {
                icon: "icon-jifen",
                title: "积分商城",
            },
            {
                icon: "icon-pengyou",
                title: "帮助服务",
            },
            {
                icon: "icon-kefu",
                title: "联系客服",
            },
        ],
        tabList: [
            { value: 1, label: "猜你喜欢" },
            { value: 2, label: "我的收藏" },
            { value: 2, label: "最近浏览" },
        ],
        TabCur: 0,
        scrollLeft: 0,
    },
    tabSelect(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
        })
    },
})
