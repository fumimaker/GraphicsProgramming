# GraphicsProgramming2019春
グラフィックプログラミングで提出した課題2~13までを公開しています。  
最終課題(13times)ではどこかで見たことあるようなシューティングゲームを作りました．  
学校のサーバーで公開しましたので良ければ遊んでください
https://web.sfc.keio.ac.jp/~fumimake/GraphicsProgramming2019S/index.html


# 13timesの遊び方
URLを読み込むとすぐにゲームが始まります．敵に当たらずに全滅させるとクリアとなります．  
パワーアップアイテムを攻撃で破壊， もしくは自機に接触させると一定時間パワーアップ状態になります．  
パワーアップには攻撃力2倍， 攻撃速度2倍， 攻撃量２倍があります．  

あそんだらぜひ (@fumi_maker)[https://twitter.com/fumi_maker?lang=ja] に感想を教えてください

# 工夫した点
- 無限に敵， 攻撃パーティクルを出すと重くなって死ぬので一定数になるように自動調整している．
 - 敵が死んだらインスタンスを削除して負荷を低減した．
 - 攻撃パーティクルも同様に定期的にインスタンスを削除することで無限に攻撃の玉を出す事ができた．
- 敵が死ぬときに花火のようなパーティクルを出すようにして爽快感（？）を出した
  - よく見ると花火のようにキラキラしている
- クラスを作ってインスタンス生成することで処理を簡略化した
