// 梦璃 MoRi 吧唧生成器逻辑
(function(){
  const DEFAULT_SRC = 'assets/mori.png';
  const PLACEHOLDER_SRC = 'assets/mori-placeholder.svg';
  const badge = document.getElementById('badge');
  const charaImg = document.getElementById('charaImg');
  const ribbon = document.getElementById('ribbon');
  const ribbonText = document.getElementById('ribbonText');

  const shapeSel = document.getElementById('shape');
  const themeSel = document.getElementById('theme');
  const ribbonToggle = document.getElementById('ribbonToggle');
  const textInput = document.getElementById('text');
  const fontSel = document.getElementById('font');
  const uploadInput = document.getElementById('upload');
  const scaleInput = document.getElementById('scale');
  const offsetXInput = document.getElementById('offsetX');
  const offsetYInput = document.getElementById('offsetY');

  const btnDownload = document.getElementById('btnDownload');
  const btnReset = document.getElementById('btnReset');

  function setShape(v){
    badge.classList.remove('badge-round','badge-squircle','badge-medal');
    badge.classList.add(`badge-${v}`);
  }

  function setTheme(v){
    const bg = badge.querySelector('.badge-bg');
    bg.classList.remove('deepsea','mint');
    if(v === 'deepsea') bg.classList.add('deepsea');
    if(v === 'mint') bg.classList.add('mint');
  }

  function setRibbonVisible(visible){
    ribbon.style.display = visible ? 'inline-flex' : 'none';
  }

  function setRibbonText(t){
    ribbonText.textContent = t || '';
  }

  function setFont(v){
    const cls = v === 'baloo' ? 'font-baloo' : 'font-noto';
    ribbon.classList.remove('font-baloo','font-noto');
    ribbon.classList.add(cls);
  }

  function setScale(pct){
    const s = Number(pct) / 100;
    charaImg.style.transform = `scale(${s}) translate(${offsetXInput.value}px, ${offsetYInput.value}px)`;
  }

  function setOffset(){
    const s = Number(scaleInput.value) / 100;
    charaImg.style.transform = `scale(${s}) translate(${offsetXInput.value}px, ${offsetYInput.value}px)`;
  }

  function reset(){
    shapeSel.value = 'round'; setShape('round');
    themeSel.value = 'jelly'; setTheme('jelly');
    ribbonToggle.checked = true; setRibbonVisible(true);
    textInput.value = 'MoRi · 水母'; setRibbonText(textInput.value);
    fontSel.value = 'baloo'; setFont('baloo');
    scaleInput.value = 100; offsetXInput.value = 0; offsetYInput.value = 0; setScale(100);
    // 回到默认图（若不存在则回退占位图）
    charaImg.onerror = () => { charaImg.onerror = null; charaImg.src = PLACEHOLDER_SRC; };
    charaImg.src = DEFAULT_SRC;
  }

  // 绑定事件
  shapeSel.addEventListener('change', e => setShape(e.target.value));
  themeSel.addEventListener('change', e => setTheme(e.target.value));
  ribbonToggle.addEventListener('change', e => setRibbonVisible(e.target.checked));
  textInput.addEventListener('input', e => setRibbonText(e.target.value));
  fontSel.addEventListener('change', e => setFont(e.target.value));
  scaleInput.addEventListener('input', e => setScale(e.target.value));
  offsetXInput.addEventListener('input', setOffset);
  offsetYInput.addEventListener('input', setOffset);

  uploadInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => { charaImg.src = reader.result; };
    reader.readAsDataURL(file);
  });

  btnDownload.addEventListener('click', async () => {
    const el = document.getElementById('badge');
    const canvas = await html2canvas(el, { backgroundColor: null, scale: 2 });
    const a = document.createElement('a');
    const now = new Date();
    const ts = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    a.download = `MoRi-badge-${ts}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  });

  btnReset.addEventListener('click', reset);

  // 初始化
  setFont('baloo');
  setScale(100);
  // 默认加载 mori.png，不存在则用占位图
  charaImg.onerror = () => { charaImg.onerror = null; charaImg.src = PLACEHOLDER_SRC; };
  charaImg.src = DEFAULT_SRC;
})();
