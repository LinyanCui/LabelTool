/**
 * browseFolder.js
 * 该文件定义了BrowseFolder()函数，它将提供一个文件夹选择对话框
 * 以供用户实现对系统文件夹选择的功能
 * 文件夹选择对话框起始目录由
 * Shell.BrowseForFolder(WINDOW_HANDLE, Message, OPTIONS, strPath)函数
 * 的strPath参数设置
 * 例如：0x11--我的电脑
 *   0 --桌面
 *  "c:\\"--系统C盘
 * 
 * 用如下代码把该函数应用到一个HTML文件中：
 *  <script src="browseFolder.js"></script>
 * 或把下面代码直接COPY到<script language="javascript">...</script>标签中；
 *
 * 用一般的触发函数均可在HTML文件中使用该函数
 * 例如：<input type="button" onclick="BrowseFolder()" />
 * 注意：请定义NAME为savePath的输入框接收或显示返回的值，例如：
 *    <input type="text" name="savePath" /> 
 *
 * 特别注意的是,由于安全方面的问题,你还需要如下设置才能使本JS代码正确运行,
 * 否者会出现"没有权限"的问题.
 *
 * 1、设置可信任站点（例如本地的可以为：http://localhost）：工具——Internet选项——安全——可信站点——站点——添加http://localhost
 * 2、其次：自定义级别中的可信任站点安全级别自定义设置中：设置下面的选项
 * "对没有标记为安全的ActiveX控件进行初始化和脚本运行"----"启用"  
 */

function BrowseFolder(){
 try{
  var Message = "请选择文件夹";  //选择框提示信息
  var Shell = new ActiveXObject( "Shell.Application" );
  var Folder = Shell.BrowseForFolder(0,Message,0x0040,0x11);//起始目录为：我的电脑
  //var Folder = Shell.BrowseForFolder(0,Message,0); //起始目录为：桌面
  if(Folder != null){
    Folder = Folder.items();  // 返回 FolderItems 对象
    Folder = Folder.item();  // 返回 Folderitem 对象
    Folder = Folder.Path;   // 返回路径
    if(Folder.charAt(Folder.length-1) != "\\"){
      Folder = Folder + "\\";
    }
    document.all.savePath.value=Folder;
    return Folder;
  }
 }catch(e){ 
  alert(e.message);
 }
}
