<template>
    <footer class="app_footer">
        <!-- 联系我们 -->
        <div class="contact">
            <div class="container">
                <dl>
                    <dd><i class="iconfont icon-qitianwuliyoutuihuo"></i> 7天无理由退货</dd>
                </dl>
                <dl>
                    <dd><i class="iconfont icon-tian15"></i> 15天换货</dd>
                </dl>
                <dl>
                    <dd><i class="iconfont icon-tianmaobaoyouqia"></i> 100元起免邮费</dd>
                </dl>
                <dl>
                    <dd><i class="iconfont icon-tianmaozhengpinbaozhang"></i> 正品保障</dd>
                </dl>
                <dl>
                    <dd><i class="iconfont icon-price_mark"></i> 价格优惠</dd>
                </dl>
            </div>
            <div class="container">
                <dl>
                    <dd>
                        <div class="ddDiv"><a href="javascript:;">售后服务</a></div>
                        <div><a href="javascript:;">支付方式</a></div>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <div class="ddDiv"><a href="javascript:;">新手上路</a></div>
                        <div><a href="javascript:;">购物指南</a></div>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <div class="ddDiv"><a href="javascript:;">配送方式</a></div>
                        <div><a href="javascript:;">邮费说明</a></div>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <div class="ddDiv"><a href="javascript:;">关于我们</a></div>
                        <div><a href="javascript:;">加入我们</a></div>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <div class="ddDiv"><a class="phone" href="javascript:;">0755-835660882</a></div>
                        <div class="chat"><a style=" color: #fff;" href="javascript:;">在线客服</a></div>
                    </dd>
                </dl>
            </div>
        </div>
        <!-- 其它 -->
        <div class="extra">
            <div class="container">

                <p class="copyright">CopyRight © 欢乐购</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang='scss'>
.app_footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color: #fff;

        .container {
            width: 1240px;
            padding: 25px 0px;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid rgb(202, 202, 202)
        }

        dl {
            height: 150px;
            text-align: center;
            color: #999;

            &:first-child {
                padding-left: 0;
            }


        }



        dd {
            width: 150px;
            height: 150px;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;

            .ddDiv {
                margin-bottom: 10px;
            }

            .phone {
                font-size: 18px;
                color: #a52525;
            }

            .chat {
                background-color: #a52525;
                width: 100px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2px;
            }

            .iconfont {
                font-size: 36px;
                display: block;
                color: #a52525;
            }

            &:hover {
                .iconfont {
                    color: $xtxColor;
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }


    }

    .extra {
        padding-top: 15px;
        background-color: #333333;
        height: 74px;

        .copyright {

            text-align: center;
            font-size: 15px;
        }

        p,
        a {
            color: #ffffffe8;
        }
    }



}
</style>