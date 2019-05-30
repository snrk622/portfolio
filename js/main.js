(function () {
    'use strict';

    // let targetElement = document.getElementById("skills");
    let vm = new Vue({
        el: '#wrapper',
        data: {
            activeTab: 1,
            targetRect: 0,
            animation: false,
            background: 'linear-gradient(bottom, #00a381 0%, #00a381 40%, #eee 41%, #eee 100%)',
            pageTopBtn: document.getElementById('pagetop')
        },
        mounted() {
            this.position();
            this.scrollWindow();
            this.scrollTop();
            window.addEventListener('scroll', this.position);
            window.addEventListener('scroll', this.scrollWindow);
        },
        methods: {
            clickTabA: function () {
                this.activeTab = 1;
            },
            clickTabB: function () {
                this.activeTab = 2;
            },
            position: function () {
                // ターゲットを取得
                let target = document.getElementById("programing_skills");
                // ターゲットの座標を取得
                let rect = target.getBoundingClientRect().top;
                // dataのtargetRectを更新
                this.targetRect = rect;
                //ウィンドウの高さ
                let windowHeight = window.innerHeight;
                if (this.targetRect <= (windowHeight / 2)) {
                    this.animation = true;
                    window.removeEventListener('scroll', this.position);
                }
            },
            scrollWindow: function () {
                let scroll = window.pageYOffset;
                let windowHeight = window.innerHeight;
                let pageHeight = document.documentElement.scrollHeight;
                this.background = (scroll / (pageHeight - windowHeight)) * 100 + '%';
            },
            scrollTop: function () {
                let target = document.getElementById('pagetop');
                target.addEventListener('click', function () {
                    let currentY = window.pageYOffset;
                    let step = 500 / currentY > 1 ? 10 : 100;
                    let timeStep = 500 / currentY * step;
                    let intervalID = setInterval(scrollUp, timeStep);
                    function scrollUp() {
                        currentY = window.pageYOffset;
                        if (currentY === 0) {
                            clearInterval(intervalID);
                        } else {
                            scrollBy(0, -step);
                        }
                    }
                });
            }

        }
    });

})();