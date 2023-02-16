//rootState.type.ts
import { store } from "./store";

// 「store.getState」はインポートしたStoreから全てのStateを取得できます。その型をRootStateに入れています。
// 今回の場合はtodosのみを管理しているためToDoのリスト型でも問題はなかったのですが、管理する状態が複数になった時のためにこのような型を紹介させていただきました。

export type RootState = ReturnType<typeof store.getState>;
