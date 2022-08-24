---
lang: zh-CN
title: Ruler14
home: true
heroImage: https://p.qlogo.cn/gh/776863832/776863832/0
---

<div style="text-align: center">
    <p>“君若知遥，此道方长。意投则迎，执见亦欢。为卿执杯，逐梦同行。”</p>
</div>

<div class="welcome" style="margin-top: 100px;margin-bottom: 50px;">
    <h2>
        制作组核心内容
    </h2>
    <p>
        本制作组于2022年6月2日创办，旨在制作更多有趣的Minecraft规则类生存及小游戏，并将其做成视频，发布在哔站
    </p>
</div>
<div class="project" style="overflow: hidden;border-radius: 10px;position: relative;">
    <h2>项目介绍</h2>
    <div class="change" id="back" onclick="">
        <img src="./public/icon/back.png" alt="">
    </div>
    <div class="change" id="next" onclick="">
        <img src="./public/icon/next.png" alt="">
    </div>
    <div class="projectBox" style="display: flex;width: 400%;height: 500px;">
        <!--  -->
        <div class="projectCard" id="Card1">
            <a href=""><img  src="./public/images/逃出生天logo.png"></a>
            <div style="width:380px;padding: 40px;">
                <h2>逃出生天</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div class="projectCard" id="Card2">
            <a href=""><img src="./public/images/一区块建筑比赛logo3.png"></a>
        </div>
    </div>
</div>

<style>
    .projectCard{
        display: flex;
        background-color: rgba(0, 0, 0, 0.164);
        width: 25%;
        height: 100%;
    }
    .projectCard img{
        width: 500px;
        height: 500px;
        flex-shrink: 0;
    }
    #Card1{
        left: 50%;
    }
    .change{
        height: 80px;
        position:absolute;
        top: 50%;
        z-index: 1;
    }
    .change img{
        height: 100%;
    }
    #back{
        left: 0;
    }
    #next{
        right: 0;
    }
</style>