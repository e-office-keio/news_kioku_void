// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "ニュースの記憶に関する実験",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\n  \u003Ch2\u003E実験にご参加いただき、ありがとうございます。\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: none; width: 100%\"\u003E\nこの実験は、\u003Cstrong\u003E慶應義塾大学メディア・コミュニケーション研究所\u003C\u002Fstrong\u003Eが行う研究プロジェクトの一環として\u003Cstrong\u003Eニュースについての記憶\u003C\u002Fstrong\u003Eを調べるためのものです。\u003Cbr\u003E\u003Cbr\u003E\nこの後、2つのニュースを${ [1, 2].includes(this.state.condition) ? '読んで' : [3, 4].includes(this.state.condition) ? '聴いて' : '見て' }いただいた後、簡単な\u003Cstrong\u003E記憶テスト\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\n\u003Cbr\u003E\u003Cbr\u003E\n実験を始める前に、次のページでは、まず、実験参加への同意をいただきます。\u003Cbr\u003E\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\n準備ができましたら「次へ」をクリックしてください。",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
          //Start画面で参加者IDを乱数で生成
          //Scriptsを選び，before: prepare
          const digits = 10;
          const participantID = this.random.range(10 ** digits, 10 ** (digits + 1));

          this.parameters.participantID = participantID;

          // 参加者IDを6で割った余りを計算（0〜5になる）
          const id = Number(this.parameters.participantID);

          // conditionに実験集団の番号をセットする
          this.state.condition = (id % 6) + 1;

        }
      },
      "title": "Intro"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\n  \u003Ch2\u003E実験参加への同意確認\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: none; width: 100%\"\u003E\n  \u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003E【目的】\u003C\u002Fstrong\u003E　この実験は、ニュースについての記憶を調べるためのものです。\n\u003Cli\u003E\u003Cstrong\u003E【所要時間】\u003C\u002Fstrong\u003E　この実験はおおよそ10分かかります。\n\u003Cli\u003E\u003Cstrong\u003E【リスク】\u003C\u002Fstrong\u003E　緊張したり、疲労を感じる可能性があります。\n\u003Cli\u003E\u003Cstrong\u003E【リスクへの対策】\u003C\u002Fstrong\u003E　体調がわるくなった場合には、参加を取りやめてください。\n\u003Cli\u003E\u003Cstrong\u003E【謝礼】\u003C\u002Fstrong\u003E　この実験への参加に対する謝金は200円です。\n\u003Cli\u003E\u003Cstrong\u003E【個人情報】\u003C\u002Fstrong\u003E　この実験では、個人を特定できる情報は一切収集しません。\n\u003Cli\u003E\u003Cstrong\u003E【データの利用】\u003C\u002Fstrong\u003E　この実験で得られたデータは、学術的な目的にのみ利用します。\n\u003Cli\u003E\u003Cstrong\u003E【データの廃棄】\u003C\u002Fstrong\u003E　この実験で得られたデータは、10年後に廃棄します。\n\u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "\u003Cbr\u003E上記のすべてをご了解の上、実験参加にご同意いただけますか。\u003Cbr\u003E",
          "options": [
            {
              "label": "はい、同意します。",
              "coding": "approved"
            }
          ],
          "name": "lessbrgreaterlessbrgreater"
        },
        {
          "required": true,
          "type": "text",
          "content": "ご同意いただけない方は、ブラウザを閉じて終了してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent",
      "plugins": []
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cheader\u003E\n  \u003Ch2\u003Eそれでは実験を始めます。\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n",
          "name": ""
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv style=\"max-width: none; width: 100%\"\u003E\n次のページから、2つの${ [1, 2].includes(this.state.condition) ? 'ニュース記事' : [3, 4].includes(this.state.condition) ? '音声ニュース' : 'ニュース映像' }が順番に呈示されます。${[3, 4, 5, 6].includes(this.state.condition) ? 'イヤホンが必要な方は装着してください。': '' }\n\u003Cbr\u003E\u003Cbr\u003E\n${ [1, 2].includes(this.state.condition) ? 'ニュースをお読みいただいた' : [3, 4].includes(this.state.condition) ? 'ニュースをお聴きいただいた' : 'ニュースをご覧いただいた' }後、記述式の\u003Cstrong\u003E記憶テスト\u003C\u002Fstrong\u003Eを行います。\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "ニュースを呈示する",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "StartInfo_text",
      "plugins": []
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "newsitem": "参政党の神谷代表は、東京大学の学園祭での講演が爆破予告で中止となったことについて「絶対許されない」と強調しました。「我々を阻止するための暴力行為でしかないので絶対許されないはずなので、参政党憎しというような気持ちがあったんじゃないかと勘ぐってしまうくらい異常な妨害だったと。」 神谷氏は東大の五月祭で16日に講演を予定していましたが、五月祭の実行委員会に爆破予告のメールが届き、16日は全ての企画が中止されました 。昨日の記者会見で神谷氏は、意見が違うからと言って暴力的な脅しや脅迫をして民主主義の根幹である「知る権利」を奪ったのは非常に由々しきことだと述べ、日本の政治全般、言論空間全般の問題だと批判しました 。（FNNニュース）",
          "headline": "神谷代表「絶対許されない」"
        },
        {
          "newsitem": "中国の習近平国家主席が、早ければ来週にも北朝鮮を訪れる可能性があると韓国メディアが報じました 。韓国の連合ニュースは20日、韓国政府高官の話として、習氏が間もなく北朝鮮に行くという情報があると報じました 。さらに別の政府関係者の話として、中国の警護チームなどが最近北朝鮮のピョンヤンを訪れていて、習氏の訪朝は今月下旬から来月上旬の可能性が高いと伝えています 。習氏は2019年に中国のトップとして初めてピョンヤンを訪問し、北朝鮮の金正恩総書記と首脳会談を行っていて、訪朝が実現すれば今回も首脳会談が行われると見られます 。（FNNニュース）",
          "headline": "中国 習主席、来週にも訪朝か 首脳会談も  韓国メディア報道"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsText_1",
      "skip": "${this.state.condition != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceText",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 前回のコードのままでOKです！
                const display = document.getElementById("simple-timer");
                let count = 3;

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "${parameters.newsitem}",
                "title": "${parameters.headline}"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ShowNewsText"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまお読みいただいたニュース記事について覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "newsitem": "今年で99回目となる東京大学の五月祭。2日間で15万人の来場が見込まれていましたが、開催初日のおととい土曜日、賑わっているはずの正門は閉ざされていました。学生がアナウンスしていたのは、「申し訳ございません。五月祭の1日目は中止となりました。キャンパスへの入構はご遠慮ください」、五月祭の中止です。そのわけは、突然の爆破予告でした。犯行予告が送られてきたというのが、東大の政治系サークル。この団体が企画していたのは参政党・神谷代表の講演会です 。「講演会の会場を爆破する」「刃物で神谷氏を襲撃する」といった内容がホームページに届いたといいます 。その報告を受けた五月祭の運営団体が、東京大学や警視庁などと協議した上で企画を中止したということです。（TBSニュース）",
          "headline": "東大学園祭 \"爆破予告\"で一部中止  神谷代表の講演会に⋯"
        },
        {
          "newsitem": "朝鮮中央テレビは今日、駆逐艦「崔賢（チェヒョン）」の船首に立つ金総書記の映像などを公開しました 。昨日までの2日間で性能試験が行われ、金総書記が艦艇の操縦システムを高く評価したとしています 。また昨日、海上から複数の戦略巡航ミサイルを連続で発射する様子を公開し、試験が成功したとしています 。金総書記は新たな5カ年計画の期間中に、同じ規模以上の艦艇を毎年2隻ずつ建造すべきと量産体制を指示し、現在建造が進む3号艦も10月の党創建記念日までに完成させることを示唆しました 。北朝鮮は多目的駆逐艦の実戦配備を急ぐことで海上からの攻撃能力を誇示し、アメリカと韓国への抑止力を強める狙いがあると見られています 。（FNNニュース）",
          "headline": "金正恩氏が駆逐艦に乗船"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsText_2",
      "skip": "${this.state.condition != 2}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceText",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 前回のコードのままでOKです！
                const display = document.getElementById("simple-timer");
                let count = 3;

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "${parameters.newsitem}",
                "title": "${parameters.headline}"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ShowNewsText"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまお読みいただいたニュース記事について覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "audiofile": "MayFes1(audio).m4a",
          "": ""
        },
        {
          "audiofile": "NorthK1(audio).m4a",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "MayFes1(audio).m4a": "embedded\u002F6fa3d4a3e903e0e7be389d36daea45e1affa0b203966daf6cae0f0815b34c937.m4a",
        "NorthK1(audio).m4a": "embedded\u002F6de488d2e8609b99eb476eee7456f87d61a4092bac76dbea65a553c2b9333ef5.m4a"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsAudio_1",
      "skip": "${this.state.condition != 3}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceAudio",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 前回のコードのままでOKです！
                const display = document.getElementById("simple-timer");
                let count = 3;

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"text-align: center;\"\u003E\n  \u003Caudio id=\"audio-player\" src=\"${this.files[this.parameters.audiofile]}\" autoplay controls\u003E\n    お使いのブラウザは音声再生に対応していません。\n  \u003C\u002Faudio\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 1. 今の画面（this）を、JavaScript全体から触れる変数（window.currentScreen）に避難させる
                window.currentScreen = this;

                // 2. 音声プレイヤーをIDで取得
                const audio = document.getElementById("audio-player");

                if (audio) {
                  // 3. 音声の再生が「終了（ended）」した瞬間を監視
                  audio.addEventListener("ended", () => {
                    console.log("音声終了：次の画面へ安全に遷移します。");

                    // 4. 避難させておいた画面の情報を使って、lab.js公式の終了関数を呼び出す
                    if (window.currentScreen && typeof window.currentScreen.end === "function") {
                      window.currentScreen.end();
                    }
                  });
                }
              }
            },
            "title": "ShowNewsAudio"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまお聴きいただいたニュースについて覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "audiofile": "MayFes2(audio).m4a",
          "": ""
        },
        {
          "audiofile": "NorthK2(audio).m4a",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {
        "MayFes2(audio).m4a": "embedded\u002F44a6fcb4c1802773e820a0810c4c3c89cd25eeeac33ae7102a5372d70592c77b.m4a",
        "NorthK2(audio).m4a": "embedded\u002Fcc51c7dae4fd57d8ed6a13b4f7ef8414a5be484aa6caa8cb4a81cc5e676e4c97.m4a"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsAudio_2",
      "skip": "${this.state.condition != 4}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceAudio",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 前回のコードのままでOKです！
                const display = document.getElementById("simple-timer");
                let count = 3;

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"text-align: center;\"\u003E\n  \u003Caudio id=\"audio-player\" src=\"${this.files[this.parameters.audiofile]}\" autoplay controls\u003E\n    お使いのブラウザは音声再生に対応していません。\n  \u003C\u002Faudio\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 1. 今の画面（this）を、JavaScript全体から触れる変数（window.currentScreen）に避難させる
                window.currentScreen = this;

                // 2. 音声プレイヤーをIDで取得
                const audio = document.getElementById("audio-player");

                if (audio) {
                  // 3. 音声の再生が「終了（ended）」した瞬間を監視
                  audio.addEventListener("ended", () => {
                    console.log("音声終了：次の画面へ安全に遷移します。");

                    // 4. 避難させておいた画面の情報を使って、lab.js公式の終了関数を呼び出す
                    if (window.currentScreen && typeof window.currentScreen.end === "function") {
                      window.currentScreen.end();
                    }
                  });
                }
              }
            },
            "title": "ShowNewsAudio"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまお聴きいただいたニュースについて覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videoURL": "https:\u002F\u002Fe-office-keio.github.io\u002Fnews_kioku\u002FMayFes1.mp4",
          "": ""
        },
        {
          "videoURL": "https:\u002F\u002Fe-office-keio.github.io\u002Fnews_kioku\u002FNorthK1.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsVideo_1",
      "skip": "${this.state.condition != 5}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceVideo",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 前回のコードのままでOKです！
                const display = document.getElementById("simple-timer");
                let count = 3;

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv\u003E\n \u003Cvideo id=\"video-player\" autoplay playsinline\u003E\n   \u003Csource src=\"${parameters.videoURL}\" type=\"video\u002Fmp4\"\u003E\n   お使いのブラウザはビデオタグをサポートしていません。\n \u003C\u002Fvideo\u003E\n\u003C\u002Fdiv\u003E\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ShowNewsVideo"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまご覧いただいたニュースについて覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "videoURL": "https:\u002F\u002Fe-office-keio.github.io\u002Fnews_kioku\u002FMayFes2.mp4",
          "": ""
        },
        {
          "videoURL": "https:\u002F\u002Fe-office-keio.github.io\u002Fnews_kioku\u002FNorthK2.mp4",
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_NewsVideo_2",
      "skip": "${this.state.condition != 6}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceVideo",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"countdown-container\"\u003E\n    \u003Cdiv class=\"number\"\u003E\n        \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // 指定の秒数をカウントダウンする
                const display = document.getElementById("simple-timer");
                let count = 3;//指定の秒数

                const intervalId = setInterval(() => {
                  count--;

                  if (count >= 0 && display) {
                    display.textContent = count; // ここで数字だけが書き換わります
                  }

                  if (count <= 0) {
                    clearInterval(intervalId);
                  }
                }, 1000);
              }
            },
            "title": "countdown",
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv\u003E\n \u003Cvideo id=\"video-player\" autoplay playsinline\u003E\n   \u003Csource src=\"${parameters.videoURL}\" type=\"video\u002Fmp4\"\u003E\n   お使いのブラウザはビデオタグをサポートしていません。\n \u003C\u002Fvideo\u003E\n\u003C\u002Fdiv\u003E\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ShowNewsVideo"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "radio",
                "label": "このニュースを知っていましたか？",
                "options": [
                  {
                    "label": "知っていた",
                    "coding": "1"
                  },
                  {
                    "label": "知らなかった",
                    "coding": "2"
                  }
                ],
                "name": "k_news2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ExposureCheck"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "textarea",
                "label": "いまご覧いただいたニュースについて覚えていることをすべてお書きください。\u003Cbr\u003E文章でなくても大丈夫です。\u003Cbr\u003E\u003Cbr\u003Eできるだけ多く、覚えていることをすべて書き出してください。",
                "name": "recall2"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Recall"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "記憶テストお疲れ様でした。\u003Cbr\u003E",
          "name": ""
        },
        {
          "type": "text",
          "title": "ここからは、単語の意味判定テストを行います。",
          "content": "画面に\u003Cstrong\u003Eひらがな\u003C\u002Fstrong\u003Eで表示される単語が、\u003Cbr\u003E\n\u003Cul\u003E\n\u003Cli\u003E日本語として意味を成す単語である場合は\u003Cbr\u003E【 F 】キー を押してください。(画面には⭕️を一緒に表示します)\n\u003Cli\u003E意味を成さない単語である場合は\u003Cbr\u003E【 J 】キー を押してください。 (画面には❌️を一緒に表示します)\n\u003C\u002Ful\u003E\n\u003Cbr\u003E\nなるべく速く、正解を選ぶことが目標です。\n\u003Cbr\u003E\u003Cbr\u003E\n次の画面で少し練習をします。\u003Cbr\u003E\u003Cbr\u003E\n準備ができたら【Space】キーを押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "Next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "AccessInfo_P"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"countdown-container\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style=\"font-size: 20px; color: #2ecc71; font-weight: bold;\"\u003E\n      指を【 F 】キーと【 J 】キーに置いてください。\n    \u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"number\"\u003E\n    \u003Cspan id=\"simple-timer\"\u003E5\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
        ) {
          // 前回のコードのままでOKです！
          const display = document.getElementById("simple-timer");
          let count = 5;

          const intervalId = setInterval(() => {
            count--;

            if (count >= 0 && display) {
              display.textContent = count; // ここで数字だけが書き換わります
            }

            if (count <= 0) {
              clearInterval(intervalId);
            }
          }, 1000);
        }
      },
      "title": "Standby",
      "timeout": "5000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "worditem": "りんご",
          "seikai": "ari"
        },
        {
          "worditem": "いちご",
          "seikai": "ari"
        },
        {
          "worditem": "ぬへちょ",
          "seikai": "nasi"
        },
        {
          "worditem": "みらぽん",
          "seikai": "nasi"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_Access_Practice",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceWord_P",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\n\n\n  \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\n    ${parameters.worditem}\n  \u003C\u002Fh3\u003E\n\n  \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\n    \n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 1.2rem;\"\u003E\n      \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️ F \u003C\u002Fspan\u003E\n    \u003C\u002Flabel\u003E\n\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 1.2rem;\"\u003E\n      \u003Cspan style=\"margin-bottom: 5px;\"\u003EJ ❌️\u003C\u002Fspan\u003E\n    \u003C\u002Flabel\u003E\n\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"container\" style=\"width: 100%; display: flex; justify-content: center;\"\u003E\n    \u003Ch1 id=\"countdown-area\" style=\"display: none; font-size: 1.5rem; margin: 0; text-align: center; width: 100%;\"\u003E\n      \u003Cspan id=\"countdown-number\"\u003E3\u003C\u002Fspan\u003E\n    \u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keypress(f)": "ari",
              "keypress(j)": "nasi"
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 変数と要素の定義（★ここを修正します）
                // ==========================================
                let timeLeft = 5; //制限時間は５秒

                const countdownArea = document.getElementById('countdown-area');
                const countdownNumber = document.getElementById('countdown-number');
                const choiceArea = document.getElementById('choice-area');

                // =============================
                // 2. カウントダウンタイマーの設定
                // =============================
                const timer = setInterval(() => {
                  timeLeft--;

                  if (timeLeft <= 3 && timeLeft > 0) {
                    countdownArea.style.display = 'block';
                    countdownNumber.innerText = timeLeft;
                  }

                  if (timeLeft <= 0) {
                    clearInterval(timer);
                    this.data.correct = false;

                    // 💡【追加】タイマーを確実に無効化し、次の画面への連鎖を防ぐ
                    this.trial.ended_on = 'timeout';

                    this.end();
                  }
                }, 1000);

              }
            },
            "title": "ShowWord_P",
            "timeout": "5000",
            "correctResponse": "${parameters.seikai}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "正解数: ${ this.state.correct_count } \u002F ${ this.state.total_count } 問 \u003Cbr\u003E\n平均反応時間（正解試行）: ${ this.state.mean_rt } 秒\n\u003Cbr\u003E\u003Cbr\u003E\n次に進むには【Space】キー\u003C\u002Fstrong\u003Eを押してください。",
          "title": "お疲れ様でした！練習セッションの結果は以下のとおりです。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "Next"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
          // ==========================================
          // Result_P画面: 練習の正解数 ＆ 平均反応時間の集計
          // ==========================================

          const ds = this.options.datastore;

          // ① 初期値を state にセット
          this.state.correct_count = 0;
          this.state.total_count = 0;
          this.state.mean_rt = "0.00";

          if (ds && ds.data) {
            // ② 条件を「ShowWord_P」（練習用コンポーネント）に絞る
            const practiceRows = ds.data.filter(r => {
              return r.sender === 'ShowWord_P' && r.response !== 'none';
            });

            // ③ 練習データが存在する場合のみ、集計処理を行う
            if (practiceRows.length > 0) {
              this.state.total_count = practiceRows.length;

              // 1. 正解数をカウント
              const correctRows = practiceRows.filter(r => {
                return r.correct === true || r.correct === 'true' || r.correct === 1 || r.correct === '1';
              });
              this.state.correct_count = correctRows.length;

              // 2. 平均反応時間(duration)を計算
              const totalRt = practiceRows.reduce((sum, r) => sum + Number(r.duration || 0), 0);
              const meanRtMs = totalRt / practiceRows.length; // ミリ秒

              // 秒単位に変換
              const meanRtSec = meanRtMs / 1000;

              this.state.mean_rt = meanRtSec.toFixed(2); // 小数点2桁の秒数
            }
          }
        }
      },
      "title": "Result_P",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "それでは、\u003Cstrong\u003E本番のテスト\u003C\u002Fstrong\u003Eを行います。",
          "content": "単語は全部で24個あります。\u003Cbr\u003E\nなるべく速く正解を選ぶことが目標です。\u003Cbr\u003E\n\u003Cbr\u003E\n準備ができたら、【Space】キーを押してください。 "
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "Next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "AccessInfo_H"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class=\"countdown-container\"\u003E\n  \u003Cdiv\u003E\n    \u003Cspan style=\"font-size: 20px; color: #2ecc71; font-weight: bold;\"\u003E\n      指を【 F 】キーと【 J 】キーに置いてください。\n    \u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"number\"\u003E\n    \u003Cspan id=\"simple-timer\"\u003E3\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
        ) {
          // 前回のコードのままでOKです！
          const display = document.getElementById("simple-timer");
          let count = 3;

          const intervalId = setInterval(() => {
            count--;

            if (count >= 0 && display) {
              display.textContent = count; // ここで数字だけが書き換わります
            }

            if (count <= 0) {
              clearInterval(intervalId);
            }
          }, 1000);
        }
      },
      "title": "Standby",
      "timeout": "3000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "itemNO": "1",
          "worditem": "じゆう",
          "seikai": "ari"
        },
        {
          "itemNO": "2",
          "worditem": "いけん",
          "seikai": "ari"
        },
        {
          "itemNO": "3",
          "worditem": "けんり",
          "seikai": "ari"
        },
        {
          "itemNO": "4",
          "worditem": "ばくは",
          "seikai": "ari"
        },
        {
          "itemNO": "5",
          "worditem": "こんらん",
          "seikai": "ari"
        },
        {
          "itemNO": "6",
          "worditem": "そうどう",
          "seikai": "ari"
        },
        {
          "itemNO": "7",
          "worditem": "ちきゅう",
          "seikai": "ari"
        },
        {
          "itemNO": "8",
          "worditem": "からす",
          "seikai": "ari"
        },
        {
          "itemNO": "9",
          "worditem": "さかな",
          "seikai": "ari"
        },
        {
          "itemNO": "10",
          "worditem": "がいこう",
          "seikai": "ari"
        },
        {
          "itemNO": "11",
          "worditem": "ほうもん",
          "seikai": "ari"
        },
        {
          "itemNO": "12",
          "worditem": "はなしあい",
          "seikai": "ari"
        },
        {
          "itemNO": "13",
          "worditem": "ぶりょく",
          "seikai": "ari"
        },
        {
          "itemNO": "14",
          "worditem": "せんかん",
          "seikai": "ari"
        },
        {
          "itemNO": "15",
          "worditem": "みさいる",
          "seikai": "ari"
        },
        {
          "itemNO": "16",
          "worditem": "けむにん",
          "seikai": "nasi"
        },
        {
          "itemNO": "17",
          "worditem": "まぴそ",
          "seikai": "nasi"
        },
        {
          "itemNO": "18",
          "worditem": "ぱりく",
          "seikai": "nasi"
        },
        {
          "itemNO": "19",
          "worditem": "ふにょま",
          "seikai": "nasi"
        },
        {
          "itemNO": "20",
          "worditem": "るちょ",
          "seikai": "nasi"
        },
        {
          "itemNO": "21",
          "worditem": "てぃらま",
          "seikai": "nasi"
        },
        {
          "itemNO": "22",
          "worditem": "ぬぽり",
          "seikai": "nasi"
        },
        {
          "itemNO": "23",
          "worditem": "とぱけこ",
          "seikai": "nasi"
        },
        {
          "itemNO": "24",
          "worditem": "むへろ",
          "seikai": "nasi"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_Access_Honban",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceWord_H",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 250px;\"\u003E\n\n\n  \u003Ch3 style=\"font-size: 2.0rem; margin-bottom: 35px; text-align: center;\"\u003E\n    ${parameters.worditem}\n  \u003C\u002Fh3\u003E\n\n  \u003Cdiv id=\"choice-area\" style=\"display: flex; justify-content: center; gap: 120px; margin-bottom: 40px;\"\u003E\n    \n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 1.2rem;\"\u003E\n      \u003Cspan style=\"margin-bottom: 5px;\"\u003E⭕️ F\u003C\u002Fspan\u003E\n    \u003C\u002Flabel\u003E\n\n    \u003Clabel style=\"display: flex; flex-direction: column; align-items: center; cursor: pointer; font-size: 1.2rem;\"\u003E\n      \u003Cspan style=\"margin-bottom: 5px;\"\u003EJ ❌️\u003C\u002Fspan\u003E\n    \u003C\u002Flabel\u003E\n\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class=\"container\" style=\"width: 100%; display: flex; justify-content: center;\"\u003E\n    \u003Ch1 id=\"countdown-area\" style=\"display: none; font-size: 1.5rem; margin: 0; text-align: center; width: 100%;\"\u003E\n      残り\u003Cspan id=\"countdown-number\"\u003E3\u003C\u002Fspan\u003E秒です\n    \u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keypress(f)": "ari",
              "keypress(j)": "nasi"
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 変数と要素の定義（★ここを修正します）
                // ==========================================
                let timeLeft = 5; //制限時間は５秒

                const countdownArea = document.getElementById('countdown-area');
                const countdownNumber = document.getElementById('countdown-number');
                const choiceArea = document.getElementById('choice-area');

                // =============================
                // 2. カウントダウンタイマーの設定
                // =============================
                const timer = setInterval(() => {
                  timeLeft--;

                  if (timeLeft <= 3 && timeLeft > 0) {
                    countdownArea.style.display = 'block';
                    countdownNumber.innerText = timeLeft;
                  }

                  if (timeLeft <= 0) {
                    clearInterval(timer);
                    this.data.correct = false;

                    // 💡【追加】タイマーを確実に無効化し、次の画面への連鎖を防ぐ
                    this.trial.ended_on = 'timeout';

                    this.end();
                  }
                }, 1000);

              }
            },
            "title": "ShowWord_H",
            "timeout": "5000",
            "correctResponse": "${parameters.seikai}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "正解数: ${ this.state.correct_count } \u002F ${ this.state.total_count } 問 \u003Cbr\u003E\n平均反応時間（正解試行）: ${ this.state.mean_rt } 秒\n\u003Cbr\u003E\u003Cbr\u003E\n次へ進むには【Space】キーを押してください。 ",
          "title": "お疲れ様でした！本番テストが終了しました。"
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "Next"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
          // ==========================================
          // Result画面: 本番の正解数 ＆ 平均反応時間の集計
          // ==========================================

          const ds = this.options.datastore;

          // ① 最初に必ず初期値を state にセット
          this.state.correct_count = 0;
          this.state.total_count = 0;
          this.state.mean_rt = "0.00";

          if (ds && ds.data) {
            // ② 条件を「ShowWord_H」だけに絞る（pathの条件を外す、または緩める）
            const honbanRows = ds.data.filter(r => {
              // 刺激が表示されたコンポーネント名が一致し、かつタイムアウト(none)していない行
              return r.sender === 'ShowWord_H' && r.response !== 'none';
            });

            // ③ 本番データが存在する場合のみ、集計処理を行う
            if (honbanRows.length > 0) {
              this.state.total_count = honbanRows.length;

              // 1. 正解数をカウント
              const correctRows = honbanRows.filter(r => {
                return r.correct === true || r.correct === 'true' || r.correct === 1 || r.correct === '1';
              });
              this.state.correct_count = correctRows.length;

              // 2. 平均反応時間(duration)を計算
              const totalRt = honbanRows.reduce((sum, r) => sum + Number(r.duration || 0), 0);
              const meanRtMs = totalRt / honbanRows.length; // 一旦ミリ秒で計算

              // ミリ秒を1000で割って「秒」に変換（小数点以下2桁にする）
              const meanRtSec = meanRtMs / 1000;

              this.state.mean_rt = meanRtSec.toFixed(2); // 秒単位でstateに格納
            }
          }
        }
      },
      "title": "Result_H",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "意味判定テスト、お疲れさまでした。\u003Cbr\u003Eそれでは、今度は${ [1, 2].includes(this.state.condition) ? 'お読みいただいた' : [3, 4].includes(this.state.condition) ? 'お聴きいただいた' : 'ご覧いただいた' }2つのニュースについてクイズを出します。",
          "content": "\u003Cul\u003E\n\u003Cli\u003Eクイズは全部で20問あります。\n\u003Cli\u003E1問あたりの制限時間は、10秒です。\n\u003Cli\u003E制限時間を過ぎると次の問に移ります。\n\u003C\u002Ful\u003E"
        },
        {
          "required": true,
          "type": "text",
          "content": "内容が正しい場合は ⭕️、間違いである場合は ❌️をクリックしてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "クイズを始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "QuizInfo"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "itemNO": "1",
          "quizitem": "爆破予告の連絡は、実行委員会へ「メール」で届いた。",
          "seikai": "sei",
          "出典元とポイント": "メールが届いたと記載されています。"
        },
        {
          "itemNO": "2",
          "quizitem": "爆破予告を受け、中止になったのは「神谷氏の講演のみ」である。",
          "seikai": "go",
          "出典元とポイント": "16日の全ての企画が中止されました。"
        },
        {
          "itemNO": "3",
          "quizitem": "神谷氏は、今回の事態を「大学の自由」を奪うものだと批判した。",
          "seikai": "go",
          "出典元とポイント": "民主主義の根幹である「知る権利」を奪ったと述べています。"
        },
        {
          "itemNO": "4",
          "quizitem": "神谷氏は、犯人の動機を「参政党への憎しみ」があったのではないかと推測している。",
          "seikai": "sei",
          "出典元とポイント": "「参政党憎しというような気持ちがあったんじゃないか」と述べています。"
        },
        {
          "itemNO": "5",
          "quizitem": "爆破予告が届いた先は、本郷キャンパスの「事務局」である。",
          "seikai": "go",
          "出典元とポイント": "五月祭の実行委員会に届きました。"
        },
        {
          "itemNO": "6",
          "quizitem": "神谷氏は、今回の妨害を「参政党にはよくあること」と表現した。",
          "seikai": "go",
          "出典元とポイント": "「異常な妨害だった」と述べています。"
        },
        {
          "itemNO": "7",
          "quizitem": "神谷氏は、この問題は「特定の政党」だけの問題ではないと主張した。",
          "seikai": "sei",
          "出典元とポイント": "「日本の政治全般、言論空間全般の問題」だと批判しています。"
        },
        {
          "itemNO": "8",
          "quizitem": "学園祭の実行委員会は「知る権利」を侵害されたと述べている。",
          "seikai": "go",
          "出典元とポイント": "その通り述べています。"
        },
        {
          "itemNO": "9",
          "quizitem": "神谷氏は、妨害行為を「我々を阻止するための暴力行為」と強調した。",
          "seikai": "sei",
          "出典元とポイント": "その通り強調しています。"
        },
        {
          "itemNO": "10",
          "quizitem": "爆破予告の犯人は、東大のキャンパスに来ていた可能性がある。",
          "seikai": "go",
          "出典元とポイント": "犯人の特定については言及されていません。"
        },
        {
          "itemNO": "11",
          "quizitem": "習近平氏の訪朝の可能性を報じたのは「韓国メディア」である。",
          "seikai": "sei",
          "出典元とポイント": "韓国メディアが報じたとされています。"
        },
        {
          "itemNO": "12",
          "quizitem": "訪朝に関する情報の出所は「中国政府の公式発表」である。",
          "seikai": "go",
          "出典元とポイント": "「韓国政府高官の話」などが情報の出所です。"
        },
        {
          "itemNO": "13",
          "quizitem": "習氏の訪朝は、早ければ「来週」にも行われる可能性がある。",
          "seikai": "sei",
          "出典元とポイント": "「早ければ来週にも」と報じられています。"
        },
        {
          "itemNO": "14",
          "quizitem": "中国の「警護チーム」が最近、平壌（ピョンヤン）を訪れている。",
          "seikai": "sei",
          "出典元とポイント": "警護チームなどが訪れていると報じられています。"
        },
        {
          "itemNO": "15",
          "quizitem": "今回の訪朝では、両首脳の親密ぶりが演出されると見られている。",
          "seikai": "go",
          "出典元とポイント": "中国のトップとして初めて平壌を訪問したとされています。"
        },
        {
          "itemNO": "16",
          "quizitem": "今回の訪朝が実現すれば、金正恩総書記との「首脳会談」が行われる見通しである。",
          "seikai": "sei",
          "出典元とポイント": "首脳会談が行われると見られています。"
        },
        {
          "itemNO": "17",
          "quizitem": "情報を伝えた別の関係者によると、中国の「経済視察団」が平壌を訪れた。",
          "seikai": "go",
          "出典元とポイント": "訪れたのは「警護チームなど」です。"
        },
        {
          "itemNO": "18",
          "quizitem": "習氏が前回訪朝した際に、金正恩氏と首脳会談を行った記述がある。",
          "seikai": "sei",
          "出典元とポイント": "2019年に首脳会談を行っています。"
        },
        {
          "itemNO": "19",
          "quizitem": "習氏の訪朝計画について、北朝鮮側が「公式に歓迎の意」を示した。",
          "seikai": "go",
          "出典元とポイント": "北朝鮮側の反応についてはソースに記載がありません。"
        },
        {
          "itemNO": "20",
          "quizitem": "習氏は今回も婦人同伴で平壌を訪問する予定である。",
          "seikai": "go",
          "出典元とポイント": "2019年の訪問が「中国のトップとして初めて」です。"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_Quiz_1",
      "skip": "${ ![1, 3, 5].includes(this.state.condition) }",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceQuiz",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp id=\"quiz-counter\" style=\"font-size: 1.2rem; color: #666; margin-bottom: 5px;\"\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E${parameters.quizitem}\u003C\u002Fh3\u003E\n\n\u003Cdiv id=\"choice-area\"\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"response\" value=\"sei\"\u003E ⭕️\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"response\" value=\"go\"\u003E ❌️\u003C\u002Flabel\u003E\u003Cbr\u003E\n\u003C\u002Fdiv\u003E\n\n\u003C!-- ↓↓↓ この周辺のスタイルを調整します ↓↓↓ --\u003E\n\u003Cdiv class=\"container\" style=\"border: none; box-shadow: none; outline: none; margin: 0 auto; padding: 0; text-align: center; width: 100%;\"\u003E\n  \u003Ch1 id=\"countdown-area\" style=\"display: none; font-size: 1.5rem; border: none; box-shadow: none; margin: 10px auto; text-align: center;\"\u003E\n    残り \u003Cspan id=\"countdown-number\"\u003E3\u003C\u002Fspan\u003E 秒です\n  \u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 変数と要素の定義（★ここを修正します）
                // ==========================================
                let timeLeft = 10;

                const countdownArea = document.getElementById('countdown-area');
                const countdownNumber = document.getElementById('countdown-number');
                const choiceArea = document.getElementById('choice-area');
                const radios = choiceArea.querySelectorAll('input[type="radio"]');
                const quizCounter = document.getElementById('quiz-counter');

                // 💡 実験全体で使うカウンターがまだ無ければ「0」で作る
                if (typeof window.globalQuizCount === 'undefined') {
                  window.globalQuizCount = 0;
                }

                // 画面が表示されるたびに、カウンターを「+1」する
                window.globalQuizCount++;

                // 画面に「◯問目」と表示
                quizCounter.innerText = `${window.globalQuizCount}問目`;


                // ==========================================
                // 2. カウントダウンタイマーの設定（ここから下は変更なし）
                // ==========================================
                const timer = setInterval(() => {
                  timeLeft--;

                  if (timeLeft <= 3 && timeLeft > 0) {
                    countdownArea.style.display = 'block';
                    countdownNumber.innerText = timeLeft;
                  }

                  if (timeLeft <= 0) {
                    clearInterval(timer);
                    this.data.correct = false;
                    this.end();
                  }
                }, 1000);

                // ==========================================
                // 3. 選択肢（⭕️/❌️）がクリックされた時の処理（変更なし）
                // ==========================================
                radios.forEach(radio => {
                  radio.addEventListener('click', (event) => {
                    clearInterval(timer);

                    const userAnswer = event.target.value;
                    this.data.response = userAnswer;

                    const correctAnswer = this.parameters.seikai;
                    this.data.correct = (userAnswer === correctAnswer);

                    setTimeout(() => {
                      this.end();
                    }, 150);
                  });
                });
              }
            },
            "title": "Showquiz",
            "timeout": "10000",
            "correctResponse": "${parameters.seikai}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\n  \n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 直前の画面の正誤判定を取得
                // ==========================================
                // lab.jsが保存した一番最後の試行データ（正誤）を確認します
                const isCorrect = this.state.correct;

                const correctArea = document.getElementById('feedback-correct');
                const incorrectArea = document.getElementById('feedback-incorrect');

                // ==========================================
                // 2. 判定に合わせて画面の表示を切り替え
                // ==========================================
                if (isCorrect === true) {
                  correctArea.style.display = 'block';   // 正解を表示
                } else {
                  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
                }

                // ==========================================
                // 3. 0.5秒後に自動で次の画面（次の問題）へ進む
                // ==========================================
                setTimeout(() => {
                  this.end();
                }, 500); // 1000ミリ秒 = 1秒（長さを変えたい場合はここを調整してください）

              }
            },
            "title": "Feedback"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "itemNO": "1",
          "quizitem": "金総書記が視察した駆逐艦の名前は「崔賢（チェヒョン）」である。",
          "seikai": "sei",
          "出典元とポイント": "正しい名称です。"
        },
        {
          "itemNO": "2",
          "quizitem": "金総書記は艦艇のミサイル発射システムを高く評価した。",
          "seikai": "go",
          "出典元とポイント": "操縦システムを評価したとされています。"
        },
        {
          "itemNO": "3",
          "quizitem": "視察した駆逐艦は、海上でのミサイル連続発射を実現するために建造された。",
          "seikai": "go",
          "出典元とポイント": "海上からの連続発射です。"
        },
        {
          "itemNO": "4",
          "quizitem": "金総書記は、5カ年計画中に毎年艦艇を建造するよう指示した。",
          "seikai": "sei",
          "出典元とポイント": "毎年2隻ずつです。"
        },
        {
          "itemNO": "5",
          "quizitem": "建造を指示した艦艇は、今回の駆逐艦と同じ規模以上のものである。",
          "seikai": "sei",
          "出典元とポイント": "同規模以上の量産を指示しました。"
        },
        {
          "itemNO": "6",
          "quizitem": "金総書記は、艦艇に乗ってミサイルの発射場面を視察した。",
          "seikai": "go",
          "出典元とポイント": "党創建記念日までの完成を目指しています。"
        },
        {
          "itemNO": "7",
          "quizitem": "北朝鮮の狙いは、アメリカと韓国への抑止力を強めることである。",
          "seikai": "sei",
          "出典元とポイント": "アメリカと韓国への抑止力が目的とされています。"
        },
        {
          "itemNO": "8",
          "quizitem": "北朝鮮の駆逐艦は、最新の先端技術を多く搭載していると見られている。",
          "seikai": "go",
          "出典元とポイント": "海上からの攻撃能力です。"
        },
        {
          "itemNO": "9",
          "quizitem": "北朝鮮は、多目的駆逐艦の実戦配備を急いでいる。",
          "seikai": "sei",
          "出典元とポイント": "実戦配備を急ぐ狙いがあると見られています。"
        },
        {
          "itemNO": "10",
          "quizitem": "金総書記による視察は、ものものしい雰囲気の中で行われた。",
          "seikai": "go",
          "出典元とポイント": "試験が成功したとしています。"
        },
        {
          "itemNO": "11",
          "quizitem": "中止されたにもかかわらず、当日、東大のキャンパスは賑わっていた。",
          "seikai": "go",
          "出典元とポイント": "正門は閉鎖されていました。"
        },
        {
          "itemNO": "12",
          "quizitem": "中止のアナウンスを行っていたのは実行委員会の学生たちである。",
          "seikai": "sei",
          "出典元とポイント": "学生がアナウンスしていました。"
        },
        {
          "itemNO": "13",
          "quizitem": "爆破予告が届いたのは、学内の政治系サークルである。",
          "seikai": "sei",
          "出典元とポイント": "政治系サークルに届きました。"
        },
        {
          "itemNO": "14",
          "quizitem": "爆破予告のメッセージは、サークルのホームページに届いた。",
          "seikai": "sei",
          "出典元とポイント": "サークルのホームページに届きました。"
        },
        {
          "itemNO": "15",
          "quizitem": "犯行予告には、会場の爆破だけでなく刃物での襲撃も含まれていた。",
          "seikai": "sei",
          "出典元とポイント": "「刃物で神谷氏を襲撃する」という内容もありました。"
        },
        {
          "itemNO": "16",
          "quizitem": "企画の中止を最終的に判断したのは、参政党の神谷代表である。",
          "seikai": "go",
          "出典元とポイント": "五月祭の運営団体が協議の上で判断しました。"
        },
        {
          "itemNO": "17",
          "quizitem": "中止の判断にあたって、運営団体は警視庁と協議した。",
          "seikai": "sei",
          "出典元とポイント": "大学や警察と協議を行っています。"
        },
        {
          "itemNO": "18",
          "quizitem": "神谷氏の講演会だけでなく1日目のすべてのイベントが中止になった。",
          "seikai": "sei",
          "出典元とポイント": "五月祭の1日目全体が中止となりました。"
        },
        {
          "itemNO": "19",
          "quizitem": "キャンパスへの入構は遠慮するよう求められたが、一帯は騒然としていた。",
          "seikai": "go",
          "出典元とポイント": "「キャンパスへの入構はご遠慮ください」と全面的な制限でした。"
        },
        {
          "itemNO": "20",
          "quizitem": "爆破予告の内容は、神谷氏の自宅を襲撃するというものであった。",
          "seikai": "go",
          "出典元とポイント": "講演会の会場の爆破予告です。"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop_Quiz_2",
      "skip": "${ ![2, 4, 6].includes(this.state.condition) }",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "SequenceQuiz",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp id=\"quiz-counter\" style=\"font-size: 1.2rem; color: #666; margin-bottom: 5px;\"\u003E\u003C\u002Fp\u003E\n\u003Ch3\u003E${parameters.quizitem}\u003C\u002Fh3\u003E\n\n\u003Cdiv id=\"choice-area\"\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"response\" value=\"sei\"\u003E ⭕️\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"response\" value=\"go\"\u003E ❌️\u003C\u002Flabel\u003E\u003Cbr\u003E\n\u003C\u002Fdiv\u003E\n\n\u003C!-- ↓↓↓ この周辺のスタイルを調整します ↓↓↓ --\u003E\n\u003Cdiv class=\"container\" style=\"border: none; box-shadow: none; outline: none; margin: 0 auto; padding: 0; text-align: center; width: 100%;\"\u003E\n  \u003Ch1 id=\"countdown-area\" style=\"display: none; font-size: 1.5rem; border: none; box-shadow: none; margin: 10px auto; text-align: center;\"\u003E\n    残り \u003Cspan id=\"countdown-number\"\u003E3\u003C\u002Fspan\u003E 秒です\n  \u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 変数と要素の定義（★ここを修正します）
                // ==========================================
                let timeLeft = 10;

                const countdownArea = document.getElementById('countdown-area');
                const countdownNumber = document.getElementById('countdown-number');
                const choiceArea = document.getElementById('choice-area');
                const radios = choiceArea.querySelectorAll('input[type="radio"]');
                const quizCounter = document.getElementById('quiz-counter');

                // 💡 実験全体で使うカウンターがまだ無ければ「0」で作る
                if (typeof window.globalQuizCount === 'undefined') {
                  window.globalQuizCount = 0;
                }

                // 画面が表示されるたびに、カウンターを「+1」する
                window.globalQuizCount++;

                // 画面に「◯問目」と表示
                quizCounter.innerText = `${window.globalQuizCount}問目`;


                // ==========================================
                // 2. カウントダウンタイマーの設定（ここから下は変更なし）
                // ==========================================
                const timer = setInterval(() => {
                  timeLeft--;

                  if (timeLeft <= 3 && timeLeft > 0) {
                    countdownArea.style.display = 'block';
                    countdownNumber.innerText = timeLeft;
                  }

                  if (timeLeft <= 0) {
                    clearInterval(timer);
                    this.data.correct = false;
                    this.end();
                  }
                }, 1000);

                // ==========================================
                // 3. 選択肢（⭕️/❌️）がクリックされた時の処理（変更なし）
                // ==========================================
                radios.forEach(radio => {
                  radio.addEventListener('click', (event) => {
                    clearInterval(timer);

                    const userAnswer = event.target.value;
                    this.data.response = userAnswer;

                    const correctAnswer = this.parameters.seikai;
                    this.data.correct = (userAnswer === correctAnswer);

                    setTimeout(() => {
                      this.end();
                    }, 150);
                  });
                });
              }
            },
            "title": "Showquiz",
            "timeout": "10000",
            "correctResponse": "${parameters.seikai}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"feedback-container\" style=\"text-align: center; margin-top: 50px;\"\u003E\n  \n  \u003Cdiv id=\"feedback-correct\" style=\"display: none;\"\u003E\n    \u003Ch1 style=\"color: #2ecc71; font-size: 2rem;\"\u003E正解！\u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv id=\"feedback-incorrect\" style=\"display: none;\"\u003E\n    \u003Ch1 style=\"color: #e74c3c; font-size: 2rem;\"\u003E不正解\u003C\u002Fh1\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
              ) {
                // ==========================================
                // 1. 直前の画面の正誤判定を取得
                // ==========================================
                // lab.jsが保存した一番最後の試行データ（正誤）を確認します
                const isCorrect = this.state.correct;

                const correctArea = document.getElementById('feedback-correct');
                const incorrectArea = document.getElementById('feedback-incorrect');

                // ==========================================
                // 2. 判定に合わせて画面の表示を切り替え
                // ==========================================
                if (isCorrect === true) {
                  correctArea.style.display = 'block';   // 正解を表示
                } else {
                  incorrectArea.style.display = 'block'; // 不正解（または時間切れ）を表示
                }

                // ==========================================
                // 3. 0.5秒後に自動で次の画面（次の問題）へ進む
                // ==========================================
                setTimeout(() => {
                  this.end();
                }, 500); // 1000ミリ秒 = 1秒（長さを変えたい場合はここを調整してください）

              }
            },
            "title": "Feedback"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Blank",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp\u003Eクイズの正解数は \u003Cstrong\u003E${ this.state.quiz_correct_count }\u003C\u002Fstrong\u003E \u002F ${ this.state.quiz_total_count } 問でした。\u003C\u002Fp\u003E",
          "title": "クイズへの解答、お疲れ様でした！"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
          // ==========================================
          // Result_Quiz画面: 解説書のスマートな手法を採用
          // ==========================================

          const ds = this.options.datastore;

          // 初期値のリセット
          this.state.quiz_correct_count = 0;
          this.state.quiz_total_count = 0;

          if (ds && ds.data) {
            // ① 解説書の手法(2) を使い、Showquiz の行だけを美しく抽出
            const quizRows = ds.data.filter(r => r.sender === 'Showquiz');

            if (quizRows.length > 0) {
              this.state.quiz_total_count = quizRows.length;

              // ② 正解（correct が true、"true"、1 のいずれか）の行を絞り込む
              const correctRows = quizRows.filter(r => {
                return r.correct === true || r.correct === 'true' || r.correct === 1 || r.correct === '1';
              });

              this.state.quiz_correct_count = correctRows.length;
            }
          }
        }
      },
      "title": "Result_Quiz",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "それでは、最後の質問です。",
          "content": "あなたのお考えについていくつかお尋ねします。\u003Cbr\u003E\nそれぞれの質問項目に対し、あなたのお考えに最も近い選択肢を一つお選びください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "DVInfo"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "神谷氏の講演が予定されていた日のイベントをすべて中止にした決定は間違っている",
              "coding": "v1"
            },
            {
              "label": "騒ぎが起きる可能性のあるイベントは開催すべきではない",
              "coding": "v2"
            },
            {
              "label": "一般的に言って、ヘイトスピーチがなされる可能性があっても講演は行われるべきだ",
              "coding": "v3"
            },
            {
              "coding": "v4",
              "label": "事故が起きないように会場を管理することは大変なことである"
            },
            {
              "label": "たくさんの人が集まるイベントは混乱が起きやすい",
              "coding": "v5"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q1. あなたは、以下のことについてどう思いますか。",
          "shuffle": true,
          "name": "q1."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "DV_mesure1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "金正恩総書記は、北朝鮮を代表する正当なリーダーである",
              "coding": "v6"
            },
            {
              "label": "北朝鮮は危ない国である",
              "coding": "v7"
            },
            {
              "label": "北朝鮮はスキがあれば日本を攻撃しようとしている",
              "coding": "v8"
            },
            {
              "coding": "v9",
              "label": "金正恩総書記は横柄な人物である"
            },
            {
              "label": "北朝鮮の軍事技術は高いレベルに達している",
              "coding": "v10"
            }
          ],
          "width": "5",
          "anchors": [
            "全くそう思わない",
            "あまりそう思わない",
            "どちらでもない",
            "少しそう思う",
            "全くそう思う"
          ],
          "label": "Q2. あなたは、以下のことについてどう思いますか。",
          "shuffle": true,
          "name": "q2."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "DV_mesure2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "あなたの性別を教えてください。 ",
          "options": [
            {
              "label": "男性",
              "coding": "1"
            },
            {
              "label": "女性",
              "coding": "2"
            },
            {
              "label": "回答しない",
              "coding": "3"
            }
          ],
          "name": "sex"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "input",
          "label": "あなたの年齢を教えてください。",
          "attributes": {
            "type": "number",
            "min": "15",
            "max": "69"
          },
          "name": "age"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Demo"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "本実験の「本当の目的」について説明します。",
          "content": "\u003Cdiv style=\" max-width: none; width: 100%\"\u003E\n\u003Col\u003E\n  \u003Cli\u003Eこの実験は、ニュースの\u003Cstrong\u003Eモダリティ（文字、音声、 映像 ）の違い\u003C\u002Fstrong\u003Eが、ニュース内容の記憶やニュースで取り上げられている争点についての態度および認識にどのように影響するのかを調べるためのものです。\u003Cstrong\u003E皆さんは、この実験の中で、 内容は全く同じですが 、文字か、音声か、映像かのどれか一つの形式のニュースに接触しています。\u003C\u002Fstrong\u003E異なる形式のニュースに接触した参加者の間で、\u003Cstrong\u003E想起できたニュースの内容や関連する単語の想起の速さ、記憶の正しさ\u003C\u002Fstrong\u003Eに差が見られるかどうかをこれから分析します。\u003Cbr\u003E\u003Cbr\u003E\n  \u003Cli\u003Eもう一つの目的は、ニュースの\u003Cstrong\u003Eフレーム(切り口や観点)\u003C\u002Fstrong\u003Eの違いによる、 争点態度の違いを見ることです。実はこの実験では、東大の五月祭に関するニュースが2種類(「表現の自由」という観点からのニュースと「公共の安全」という観点からのニュース)、北朝鮮の金正恩総書記に関するニュースが2種類(「外交の主体」という観点からのニュースと「軍統帥権者」という観点からのニュース)が使われています。\u003Cstrong\u003E皆さんは、この実験の中で、そのうちのどれか一つだけに接触しています。\u003C\u002Fstrong\u003E異なる観点からのニュースに接触した参加者の間で参政党党首の\u003Cstrong\u003E講演会の中止に対する態度\u003C\u002Fstrong\u003E、また、\u003Cstrong\u003E北朝鮮という国に対する態度\u003C\u002Fstrong\u003Eに違いが生じるのかどうかをこれから分析します。\n\u003C\u002Fol\u003E\n\u003C\u002Fdiv\u003E"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "likert",
          "items": [
            {
              "label": "1番の実験目的",
              "coding": "p1"
            },
            {
              "label": "2番の実験目的",
              "coding": "p2"
            }
          ],
          "width": "5",
          "anchors": [
            "全く気づかなかった",
            null,
            null,
            null,
            "完全に気づいていた"
          ],
          "label": "Q1. あなたは上記の実験目的にどれくらい気づいていましたか？ ",
          "name": "purpose"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "Q2. 上記の目的を了解した上で、あなたのデータを利用することに同意しますか？",
          "options": [
            {
              "label": "はい、同意します。"
            }
          ],
          "name": "final_consent"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "お疲れ様でした！この度は、実験にご参加いただき、誠にありがとうございます。\u003Cbr\u003E\n\u003Cstrong\u003Eデータはすでに保存されています\u003C\u002Fstrong\u003Eので、このままブラウザを閉じていただいても大丈夫です。",
          "title": "実験はこれで終了です。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
          //check Tardy
          //ファイル名をランダムIDにする
          const participantID = this.random.uuid4()

          //csvファイルで保存する場合
          const filename = participantID + "_data.csv"
          const data = study.internals.controller.datastore.exportCsv();

          fetch("https://pipe.jspsych.org/api/data/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
            body: JSON.stringify({
              experimentID: "yyn030QFLC1h",
              filename: filename,
              data: data,
            }),
          });

        }
      },
      "title": "Bye",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()