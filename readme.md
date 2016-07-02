# Nico Thumb

Yahoo!のYQLを使ってニコ動の動画情報を取得して表示します。

下記のjQueryプラグインを先に読み込んでから使ってください

[Cross-domain requests with jQuery](http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/)


## 使い方(How to use)

下記のファイルを読み込んでください。

* jquery.nicothumb.js

```html
<script type="text/javascript" src="jquery.nicothumb.js"></script>
```

jquery.xdomainajax.jsの後ろで読み込んでください。

### 基本的な使い方

```javascript
$("#video_info").nicothumb({
	video_id: "sm9"
});
```

### 高度？な使い方
```javascript
$(".info").s_animation({
	video_id: "sm9",
	insert: false,
	callback: function (video_info){
		// コールバック
		console.log(video_info);
	}
});
```

```javascript
$(".info").s_animation({
	video_id: "sm9",
	template: "<h1>{title}</h1><img src='{thumbnail_url}' alt='サムネ'>"
});
```


### オプション(Option)

|キー|説明|初期値|
|-------|-------|-------|
|`video_id`|動画ID|`sm9`|
|`insert`|htmlを挿入するか|`true`|
|`template`|挿入するhtmlテンプレート|テンプレートについてを参照|
|`callback`|取得後に実行されるメソッド|`function(){}`|

#### テンプレートについて

テンプレート内で使える変数っぽいやつです。

|変数|説明|
|-------|-------|
|`{title}`|動画タイトル|
|`{view_counter}`|再生数|
|`{comment_num}`|コメント数|
|`{mylist_counter}`|マイリスト数|
|`{length}`|再生時間|
|`{watch_url}`|動画URL|
|`{thumbnail_url}`|サムネイルURL|

初期値

```javascript
""
+ "<h1><a href=\"{watch_url}\">{title}</a></h1>"
+ "<a href=\"{watch_url}\">"
+ "<img src=\"{thumbnail_url}\" alt=\"サムネイル\">"
+ "</a>"
+ "<p>再生数: <span>{view_counter}</span></p>"
+ "<p>コメント数: <span>{comment_num}</span></p>"
+ "<p>マイリスト数: <span>{mylist_counter}</span></p>"
+ "<p>再生時間: <span>{length}</span></p>"
```

## 著者(Author)
**Reona Oshima (totoraj)**
* [http://totoraj.net](http://totoraj.net/)
* [Twitter: @totoraj930](https://twitter.com/totoraj930/)


## ライセンス(License)
Copyright &copy; 2015 Reona Oshima (totoraj)  
This work is released  under the MIT License.  
<http://opensource.org/licenses/mit-license.php>