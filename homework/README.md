## 習題1
- 參考簡易範例 程式碼是自己寫的
## 習題2
- 參考[formDemo.html](https://github.com/ccc113b/html2server/blob/master/01-%E5%89%8D%E7%AB%AF%E7%B6%B2%E9%A0%81/01-html/form/formDemo.html)進行修改
- 由formDemo.html中取我要的格式來改寫
## 習題3
- 程式碼是自己寫的
## 習題4
- 4~7題大多由AI(ChatGPT)所寫
## 習題5
- 參考[oakMe2.js](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/02-oak/01-basic/oakMe2.js)進行修改
- 由oakMe2.js為基礎加上其他額外的路徑
## 習題6
- 參考[sqlite2blog.js](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/04-sqlite/01-sqliteHello/sqlite2blog.js)進行修改
- 由oakMe2.js為基礎將其更改為紀錄使用者的資料庫
## 習題7
- 參考[app.js](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/04-sqlite/04-blog/app.js)與[render.js](https://github.com/ccc113b/html2server/blob/master/02-%E5%BE%8C%E7%AB%AFserver/js/deno/04-sqlite/04-blog/render.js)進行修改
- blog.js中多寫入created_at TEXT來記錄時間，render.js的 function show(post) 中顯示文章的發佈時間（created_at）
## 習題8
- 程式碼是自己寫的
## 習題9
- 參考[02-blogSignup](https://github.com/ccc113b/html2server/tree/master/02-%E5%BE%8C%E7%AB%AFserver/py/fastapi/04-session/02-blogSignup)進行修改
- 只修改了homework/09/main.py與homework/09/templates/show_post.html<br>在查看貼文介面新增刪除功能<br>
```python
@app.post("/post/{post_id}/delete")
async def delete_post(
    request: Request,
    post_id: int = Path(...),
    db: Session = Depends(get_db)
):
    user = request.session.get("user")
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")

    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    if post.username != user["username"]:
        raise HTTPException(status_code=403, detail="You can only delete your own posts")

    db.delete(post)
    db.commit()
    return RedirectResponse(url="/", status_code=status.HTTP_303_SEE_OTHER)
```
