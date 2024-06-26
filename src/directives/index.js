//使用vueUse监测元素是否进入了视口区域
import { useIntersectionObserver } from '@vueuse/core'
// 注册全局的自定义指令
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的那个元素 img
                //binding ： binding.value 指令等于后面绑定的表达式的值 图片url
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}
