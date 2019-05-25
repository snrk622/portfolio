(function () {
    'use strict';

    let vm = new Vue({
        el: '#window',
        data: {
            activeTab: 1
        },
        methods: {
            clickTabA: function () {
                this.activeTab = 1;
            },
            clickTabB: function () {
                this.activeTab = 2;
            }
        }
    });

})();