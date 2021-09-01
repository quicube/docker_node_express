// ユーザーの作成
var user = {
    user: "user1",
    pwd: "user1",
    roles: [
        {
            role: "readWrite",
            db: "mongo"
        }
    ]
};
db.createUser(user);

// コレクションにデータを登録
db.books.insert({
    id: 1,
    title: "プログラム言語Ｃ",
    "insert_timestamp": Date.now()
});
db.books.insert({
    id: 2,
    title: "Javaによる関数型プログラミング",
    "insert_timestamp": Date.now()
});
db.books.insert({
    id: 3,
    title: "プログラムはなぜ動くのか",
    "insert_timestamp": Date.now()
});
db.books.insert({
    id: 4,
    title: "Docker入門",
    "insert_timestamp": Date.now()
});