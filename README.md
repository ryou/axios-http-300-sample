# リダイレクト

## 要約

- APIのURLが変わったので古いURLから新しいURLにリダイレクトしたい
  - 古いURLがステータスコード307(308)を返し、Locationヘッダーに新しいURLを指定する
- 非同期通信でのPOST後、特定URLへ画面遷移させたい
  - ステータスコード200を返し、レスポンスボディにリダイレクトURLを含め、JS制御でそのURLへ遷移させる
- formタグでのPOST後、特定URLへ画面遷移させたい
  - ステータスコード302か303を返し、遷移させたいURLをLocationヘッダーに指定する

## 詳細

### HTTPステータスコード302/303/307の違い

|コード|リダイレクト先へリクエストする際のメソッド|
|:----|:----|
|302|GETへ変更|
|303|GETへ変更|
|307|変更しない|

- 302/303に関しては、最初POSTでリクエストしようが、リダイレクトされる際にGETでリクエストされる
- 307に関しては、最初POSTでリクエストしていれば、リダイレクト先へもPOSTでリクエストされる
- HTTPの仕様的には、302は本来リダイレクトの際にメソッドを変更することは禁止されていたが、歴史的経緯で多くのブラウザがそういう実装になっていない
  - 結果、307ステータスコードが作られ、メソッド変更させたくない際はそちらを使うことになったらしい

## 参考

[302 Found - HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Status/302)
[HTTPステータスコード 302, 303, 307を整理する](https://yinm.hatenadiary.jp/entry/2017/03/29/204714)