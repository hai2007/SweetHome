import { get } from '../services/xhr';
import $$ from 'image2d';

// 用于显示npm包的
export default {

    update: function (el, binding) {
        el.setAttribute('class', 'ui-npm');

        let template = "";
        binding.value.forEach(item => {
            template += `
            <li>
                <h2>
                    ${item.package.name}
                    <span>${item.package.version}</span>
                </h2>
                <p>
                    ${item.package.description}
                </p>
                <div>
                    <a href='${item.package.links.homepage}' target="_blank">首页</a>
                    <a href='${item.package.links.repository}' target="_blank">代码</a>
                    <a href='${item.package.links.npm}' target="_blank">NPM</a>
                </div>
                <canvas onclick=' window.location.href="https://yelloxing.gitee.io/npm-downloads/index.html?interval=7&packages=${item.package.name}"'>非常抱歉，您的浏览器不支持canvas!</canvas>
            <li>`;
        });

        el.innerHTML = template;

        // 绘制下载图

        let date = new Date();
        let year = date.getFullYear();
        let month_day = "-" + (date.getMonth() - (-1)) + "-" + date.getDate();

        let dateString = (year - 1) + month_day + ":" + year + month_day;

        let canvas = $$('canvas', el);

        // 目前单日最高下载设置为300
        let maxValue = 200;

        binding.value.forEach((item, index) => {
            get("https://api.npmjs.org/downloads/range/" + dateString + "/" + item.package.name, data => {

                let downloads = JSON.parse(data).downloads;
                let painter = $$(canvas[index]).painter().config({
                    strokeStyle: "#ed0b0b"
                });

                // height: 50px;
                // width:200px;

                let perWidth = 200 / 366;

                painter.beginPath();
                downloads.forEach((dayItem, dayIndex) => {
                    painter.lineTo(dayIndex * perWidth, (maxValue - dayItem.downloads) / maxValue * 50);
                });
                painter.stroke();

            });
        });


    }

};
