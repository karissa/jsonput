# jsonput

Put json key/value pairs into a file or json stream from the command line

#### install

```
npm install -g jsonput
```

#### example

```
$ cat test.json
{"hello": "world"}
$ jsonput test.json hello:mars
$ cat test.json
{"hello":"mars"}
$ cat test.json | jsonput - hello:verden > test.json
$ cat test.json
{"hello" "verden"}
```

#### todo
```
$ jsonput test.json hello:{places:[mars,world]}
```



