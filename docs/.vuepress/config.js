import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Ruler14',
  description: '一个为实现梦想而奋斗的Minecraft制作组',
  theme: defaultTheme({
    navbar: [
      {
        text: '关于',
        link: '/about'
      }
    ]
  })
})
