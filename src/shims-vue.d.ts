// shims-vue.d.ts   src目录下
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

//为了typescript做的适配定义文件，因为.vue文件不是一个常规的文件类型，
//TypeScript是不能理解vue文件是干嘛的，加这一段是是告诉 TypeScript，vue文件是这种类型的。
//没有这个文件，会发现 import 导入的所有.vue类型的文件都会报错。

//axios报错
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}  