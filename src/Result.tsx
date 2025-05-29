import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // すでにimport済みならOK

const kadoTypes = [
  { min: 0, max: 3, type: 'まるっと無害系', phrase: '──最強の角なしは、最小の衝突で世界を回す。', desc: '争いごととは無縁の世界で生きる、まるっとやさしい球体人間。\nあなたは誰かを押しのけず、場を荒らさず、それでも存在している。\n自己主張が少ないのに、なぜか信頼されていること、多くない？\n“とがらない”という選択肢を、誰よりうまく使いこなしてる。\n通ったあとには、角の代わりにやさしさと安心が置いてある。' },
  { min: 4, max: 6, type: '角先案内人（ソフトエッジ）', phrase: '──角は出すものじゃない、“効かせる”ものだ。', desc: '静かにうなずき、笑顔で返し、ときどき鋭く差し込む。\nあなたは“空気に紛れた角”──誰にも気づかれずに場を動かす人。\n押しつけない。でも、いつの間にか話があなたの方向へ流れていく。\n本音を語らずとも、発される“角の気配”が道しるべになる。\n通ったあとには、なぜか物事が整理されている。不思議な精度の持ち主。' },
  { min: 7, max: 9, type: '隠れカドの思慮派', phrase: '──沈黙のなかで、角を磨いている人がいる。', desc: '発言は少なく、主張は控えめ。\nでも、その沈黙の奥には“刺す角”がちゃんと潜んでいる。\nあなたの言葉は、出てくるまで時間がかかる。けれど一発で刺さる。\nいつも静かに構えているぶん、切り出すタイミングがとても鋭い。\n通ったあとには、言葉ではなく“余韻”だけが刺さって残る。' },
  { min: 10, max: 12, type: '理性カド・コントローラー', phrase: '──角を出さずに、場を変える。知性の切っ先。', desc: '一歩引いて、全体を見て、沈黙を怖がらない。\nあなたの判断は、静かで鋭い“無音の角”だ。\n誰かが感情で走ったとき、あなたの一言が場を戻す。\n角を振り回すことはしない。ただ、“角のある姿勢”で信頼を集める。\n通ったあとには、なぜかみんなが落ち着いている。そんな役割を自然に担っている人。' },
  { min: 13, max: 15, type: '角界のスタイリスト', phrase: '──その角、使うんじゃない。魅せるんだ。', desc: 'あなたの角は、ただ刺すためじゃなく、表現するためにある。\n言葉にセンス。動きに色気。意見にユーモア。\n自己主張は強めだけど、不思議と嫌われない。\nむしろ「あなたっぽいよね」で済まされてしまう。それは角の余熱がちょうどいいから。\n通ったあとには、空気が少しだけ華やいでいる。なぜか、あなたの色が残ってる。' },
  { min: 16, max: 18, type: '突破力型ハイブリッドカド', phrase: '──その角、走り出したら止まらない。', desc: 'あなたの角は、止まってると見えない。でも動き出すと途端に主役になる。\n計画よりも実行、遠慮よりも突破。言い訳してるヒマがあったら走ってる人。\nたまに周りをヒヤッとさせるけれど、結果的に道をつくってしまう。\n「やってから考えよう」が板についてきたら、もうハイブリッドカド認定。\n通ったあとには、誰かの“はじめの一歩”が残っている。' },
  { min: 19, max: 20, type: '高密度エッジ知性', phrase: '──軽やかさ？知らない。こっちは角の密度で勝負してる。', desc: 'あなたの角は、勢いよりも精度、音量よりも厚み。\n一言に迷いがなく、沈黙のあとに来るその言葉がやたらと効く。\n多くは語らない。でも、言葉の一つひとつに角が詰まっている。\n本人にその気はなくても、なぜか「刺さること」を言ってしまう。\n通ったあとには、誰かの中でずっと考え続けられている角がある。' },
  { min: 21, max: 21, type: 'カド伝説（カドレジェ）', phrase: '──角、降臨。', desc: '語らずとも、すでに“空気の中心”にいる。\n視線が集まり、音が止み、空気の向きが、あなたを中心に変わる。\n意識せずとも、空間があなたの角に巻き込まれて整っていく。\n名を知らずとも、その角は知られている。\nそう、あなたこそが──この世に顕現したる最後の角。' },
];

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, kado } = location.state as { name: string; kado: number };

  const result = kadoTypes.find(entry => kado >= entry.min && kado <= entry.max);

  return (
    <div style={{ fontFamily: "'Shippori Mincho B1', serif", backgroundColor: '#fdf5e6', minHeight: '100vh', padding: '6rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '550px',
          backgroundColor: '#f4f4f4',
          borderRadius: '1rem',
          border: '3px solid #333',
          padding: '2rem'
        }}
      >

        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>KADO TYPE：{result?.type}</h2>
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          margin: "1rem 0 2rem",
          textAlign: "left",
          color: "#333"
        }}>
          {result?.phrase}
        </h3>

<hr style={{ border: "none", borderTop: "1px dashed #aaa", margin: "2rem 0" }} />

<p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
  {name}
</p>
<p style={{ fontSize: '1.1rem', marginBottom: '1.2rem' }}><strong>カド値：{kado}角</strong></p>


        <div style={{ marginTop: '2.5rem', fontSize: '0.95rem', lineHeight: 1, color: '#222', letterSpacing: '0.02em' }}>
          {result?.desc.split('\n').map((line, i) =>
           line.trim() ? <p key={i} style={{ marginBottom: '0.6rem' }}>{line}</p>
           : <div key={`spacer-${i}`} style={{ height: '0.6rem' }} />
          )}
        </div>
      </motion.div>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#fff',
          border: '2px solid #333',
          borderRadius: '6px',
          cursor: 'pointer',
          fontFamily: "'Shippori Mincho B1', serif",
          boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        トップに戻る
      </button>
    </div>

  </div>
 );
}