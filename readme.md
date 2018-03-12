## codingDocBuilder
> 此仓库用以生成符合coding格式的前置索引列表

## 使用
```sh
npm intsall  # 安装依赖库
chmod a+x foformat.sh  # 为sh增加执行权限
./format.sh  path/target.md  # 格式化文档
```

## 生成页内变量快速索引说明
```md
// 链接到的目标对象
## news
{
  ...
}
// 期待发起链接的源对象写法
[news](#news)
```
