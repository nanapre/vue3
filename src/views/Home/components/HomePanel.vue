<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    }
})
</script>


<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>
                    <div class="left"></div>
                    <div>{{ title }}</div>

                    <small>{{ subTitle }}</small>
                </h3>
            </div>
            <!-- 主体内容区域 -->
            <slot />
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel {
    background-color: #fff;

    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;

        h3 {

            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            width: 350px;
            line-height: 35px;
            display: flex;




            .left {
                margin-right: 10px;
                border-left: 6px red solid;

            }

            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;

            }
        }
    }
}
</style>