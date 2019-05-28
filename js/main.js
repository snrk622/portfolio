(function () {
    'use strict';
    
    // let targetElement = document.getElementById("skills");
    let vm = new Vue({
        el: '#wrapper',
        data: {
            activeTab: 1,
            targetRect: 0,
            animation: false
        },
        mounted() {
            this.position();
            window.addEventListener('scroll', this.position);
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
            }

        }
    });

})();