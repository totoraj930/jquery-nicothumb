/*
 jQuery Nico Thumb v0.0.1
 https://github.com/totoraj930/jquery-NicoThumb
 (c) 2016 Reona Oshima (totoraj).
 License: MIT
 http://opensource.org/licenses/mit-license.php
*/
$.fn.nicothumb = function (options) {
	// 設定を作成
	var setting = $.extend({
		video_id: "sm9",
		insert: true,
		template: ""
			+ "<h1><a href=\"{watch_url}\">{title}</a></h1>"
			+ "<a href=\"{watch_url}\">"
			+ "<img src=\"{thumbnail_url}\" alt=\"サムネイル\">"
			+ "</a>"
			+ "<p>再生数: <span>{view_counter}</span></p>"
			+ "<p>コメント数: <span>{comment_num}</span></p>"
			+ "<p>マイリスト数: <span>{mylist_counter}</span></p>"
			+ "<p>再生時間: <span>{length}</span></p>",
		callback: function () {}
	}, options);

	// 定数
	var THUMB_URL = "http://ext.nicovideo.jp/thumb/";

	// ターゲット
	var $target = $(this);
	// video_info
	var video_info = {
		status: "ok",//ok or error
		title: "",
		view_counter: 0,
		comment_num: 0,
		mylist_counter: 0,
		length: "",
		watch_url: "",
		thumbnail_url: ""
	}

	// YQLを使って取得開始
	$.ajax({
		url: THUMB_URL+setting.video_id,
		type: "GET"
	})
	.done(function (res) {
		var $info = $(res.results[0]),
			tmp_html = "";
		if (!$info.find("a.video").text()) {
			video_info.status = "error";
			tmp_html = "<h1>取得に失敗しました</h1>";
		}
		else {
			video_info.title = $info.find("a.video").text();
			video_info.view_counter = $info.find("strong:nth-of-type(1)").eq(0).text();
			video_info.comment_num = $info.find("strong:nth-of-type(2)").eq(0).text();
			video_info.mylist_counter = $info.find("strong:nth-of-type(3)").eq(0).text();
			video_info.length = $info.find("strong:nth-of-type(1)").eq(1).text();
			video_info.watch_url = $info.find("a.video").attr("href");
			video_info.thumbnail_url = $info.find("img.video_img").attr("src");
			tmp_html = setting.template;
			tmp_html = tmp_html.replace(/{title}/g, video_info.title);
			tmp_html = tmp_html.replace(/{view_counter}/g, video_info.view_counter);
			tmp_html = tmp_html.replace(/{comment_num}/g, video_info.comment_num);
			tmp_html = tmp_html.replace(/{mylist_counter}/g, video_info.mylist_counter);
			tmp_html = tmp_html.replace(/{length}/g, video_info.length);
			tmp_html = tmp_html.replace(/{watch_url}/g, video_info.watch_url);
			tmp_html = tmp_html.replace(/{thumbnail_url}/g, video_info.thumbnail_url);
		}
		console.log(tmp_html);
		if (setting.insert) {
			$target.html(tmp_html);
		}
		// コールバックを呼び出し
		setting.callback(video_info);
	});

	return this;
}
