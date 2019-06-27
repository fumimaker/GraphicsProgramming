# 第11回課題
この課題は https://editor.p5js.org/ml5/sketches のPoseNet_part_selectionのExampleを改変している。  
Webエディタのファイルに同ディレクトリのsketch.jsを貼り付け、実行することで動作を確認することができる。  

この課題は顔のいちにウェブ上から参照した画像をオーバーライドして顔を自動的に隠せるようにしたものである。  
Posnetの精度が高いため高精度なトラッキングが実現できている。  

# 改変した点 
- 推定精度を下げて確率が低いものを排除することで、ノイズを落としきれいに動作できるようにした。
- 画像をimgを使ってウェブ上から引っ張ってくるようにした。
- 鼻の位置を取得し、画像をその上に上書きすることでマスキングを実現した。