/* ====================================================================
 *  Plainform for Word — taskpane.js
 *  ------------------------------------------------------------------
 *  Three parts, same as the mockup:
 *    PART 1  DocumentAdapter  — the ONLY code that talks to Word (Office.js)
 *    PART 2  Engine           — pure text analysis, UNCHANGED from the mockup
 *    PART 3  UI controller    — wires the sidebar to the adapter + engine
 *
 *  Compared to the mockup, ONLY PART 1 changed: it now uses Word.run(...)
 *  instead of a fake contenteditable. Parts 2 and 3 are essentially identical,
 *  which is the whole point of having built a seam.
 * ==================================================================== */

/* ---- Style Manual data (verbatim from the working prototype) ---- */
const ENGINE_DATA = {"verbForms":{"acquire":["acquire","acquires","acquired","acquiring"],"ascertain":["ascertain","ascertains","ascertained","ascertaining"],"assist":["assist","assists","assisted","assisting"],"attempt":["attempt","attempts","attempted","attempting"],"cease":["cease","ceases","ceased","ceasing"],"commence":["commence","commences","commenced","commencing"],"disburse":["disburse","disburses","disbursed","disbursing"],"discontinue":["discontinue","discontinues","discontinued","discontinuing"],"dispatch":["dispatch","dispatches","dispatched","dispatching"],"exit":["exit","exits","exited","exiting"],"impact":["impact","impacts","impacted","impacting"],"implement":["implement","implements","implemented","implementing"],"inquire":["inquire","inquires","inquired","inquiring"],"leverage":["leverage","leverages","leveraged","leveraging"],"obtain":["obtain","obtains","obtained","obtaining"],"require":["require","requires","required","requiring"],"utilise":["utilise","utilises","utilised","utilising"],"desire":["desire","desires","desired","desiring"],"table":["table","tables","tabled","tabling"]},"replForms":{"acquire":{"buy":["buy","buys","bought","buying"],"get":["get","gets","got","getting"]},"ascertain":{"find out":["find out","finds out","found out","finding out"]},"assist":{"help":["help","helps","helped","helping"],"support":["support","supports","supported","supporting"],"guide":["guide","guides","guided","guiding"]},"attempt":{"try":["try","tries","tried","trying"]},"cease":{"stop":["stop","stops","stopped","stopping"],"end":["end","ends","ended","ending"]},"commence":{"start":["start","starts","started","starting"],"begin":["begin","begins","began","beginning"]},"disburse":{"pay":["pay","pays","paid","paying"]},"discontinue":{"stop":["stop","stops","stopped","stopping"],"end":["end","ends","ended","ending"]},"dispatch":{"send":["send","sends","sent","sending"]},"exit":{"leave":["leave","leaves","left","leaving"]},"impact":{"affect":["affect","affects","affected","affecting"]},"implement":{"apply":["apply","applies","applied","applying"],"install":["install","installs","installed","installing"],"do":["do","does","did","doing"],"start":["start","starts","started","starting"]},"inquire":{"ask":["ask","asks","asked","asking"]},"leverage":{"use":["use","uses","used","using"],"build on":["build on","builds on","built on","building on"]},"obtain":{"get":["get","gets","got","getting"],"have":["have","has","had","having"]},"require":{"need":["need","needs","needed","needing"],"must":["must","must","must","must"]},"utilise":{"use":["use","uses","used","using"]},"desire":{"want":["want","wants","wanted","wanting"]},"table":{"address":["address","addresses","addressed","addressing"],"discuss":["discuss","discusses","discussed","discussing"],"release":["release","releases","released","releasing"]}},"entries":[{"id":"sub_acquire","match":"acquire","match_type":"word","replacements":["buy","get"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_additional","match":"additional","match_type":"word","replacements":["more","extra"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_adequate_number_of","match":"adequate number of","match_type":"phrase","replacements":["enough"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_advising_in_relation_to","match":"advising in relation to","match_type":"phrase","replacements":["advising on","advising about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_amongst","match":"amongst","match_type":"word","replacements":["among"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_a_number_of","match":"a number of","match_type":"phrase","replacements":["some","many","few"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_approximately","match":"approximately","match_type":"word","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_as_a_consequence_of","match":"as a consequence of","match_type":"phrase","replacements":["because"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_ascertain","match":"ascertain","match_type":"word","replacements":["find out"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_assist","match":"assist","match_type":"word","replacements":["help","support","guide"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_at_a_later_date","match":"at a later date","match_type":"phrase","replacements":["later","soon"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_at_this_point_in_time","match":"at this point in time","match_type":"phrase","replacements":["now"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_cease","match":"cease","match_type":"word","replacements":["stop","end"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_cognisant_of","match":"cognisant of","match_type":"phrase","replacements":["aware of","know"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_collaborate_with","match":"collaborate with","match_type":"phrase","replacements":["work with"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_commence","match":"commence","match_type":"word","replacements":["start","begin"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_concerning","match":"concerning","match_type":"word","replacements":["about"],"morphology":"as_is","sense_guard":"Only the preposition meaning 'about'.","skip_if":["concerning trend","deeply concerning","is concerning","very concerning","concerning herself","concerning himself","concerning themselves","was concerning","is deeply concerning"]},{"id":"sub_consequently","match":"consequently","match_type":"word","replacements":["so"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_create_a_dialogue","match":"create a dialogue","match_type":"phrase","replacements":["speak","discuss","talk"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_desire","match":"desire","match_type":"word","replacements":["want"],"morphology":"inflect","sense_guard":"Prefer the verb.","skip_if":[]},{"id":"sub_despite_the_fact_that","match":"despite the fact that","match_type":"phrase","replacements":["although"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_disburse","match":"disburse","match_type":"word","replacements":["pay"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_discontinue","match":"discontinue","match_type":"word","replacements":["stop","end"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_dispatch","match":"dispatch","match_type":"word","replacements":["send"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_due_to_the_fact_that","match":"due to the fact that","match_type":"phrase","replacements":["because"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_exit","match":"exit","match_type":"word","replacements":["leave"],"morphology":"inflect","sense_guard":"Verb only.","skip_if":["the exit","emergency exit","exit sign","exit row"]},{"id":"sub_give_consideration_to","match":"give consideration to","match_type":"phrase","replacements":["consider"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_impact","match":"impact","match_type":"word","replacements":["affect"],"morphology":"inflect","sense_guard":"Only the verb meaning 'affect'.","skip_if":["the impact","an impact","impact assessment","environmental impact","impact statement","social impact"]},{"id":"sub_implement","match":"implement","match_type":"word","replacements":["apply","install","do","start"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_in_order_to","match":"in order to","match_type":"phrase","replacements":["to"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_relation_to","match":"in relation to","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_regards_to","match":"in regards to","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_respect_of","match":"in respect of","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_the_event_that","match":"in the event that","match_type":"phrase","replacements":["if","when"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_inquire","match":"inquire","match_type":"word","replacements":["ask"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_make_an_application","match":"make an application","match_type":"phrase","replacements":["apply"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_make_a_complaint","match":"make a complaint","match_type":"phrase","replacements":["complain"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_manner","match":"manner","match_type":"word","replacements":["way"],"morphology":"as_is","sense_guard":"Only when it means 'way'.","skip_if":["bedside manner","all manner of","good manners","bad manners","manner of speaking"]},{"id":"sub_notwithstanding","match":"notwithstanding","match_type":"word","replacements":["even though","though","despite"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_obtain","match":"obtain","match_type":"word","replacements":["get","have"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_prior_to","match":"prior to","match_type":"phrase","replacements":["before"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_primary","match":"primary","match_type":"word","replacements":["main"],"morphology":"as_is","sense_guard":"Only when it means 'chief'.","skip_if":["primary school","primary care","primary election","primary key","primary producer","primary industry","primary source","primary colour","primary colours"]},{"id":"sub_provide_a_response_to","match":"provide a response to","match_type":"phrase","replacements":["respond to"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_provide_assistance_with","match":"provide assistance with","match_type":"phrase","replacements":["help","support"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_pursuant_to","match":"pursuant to","match_type":"phrase","replacements":["under"],"morphology":"as_is","sense_guard":"Legal phrasing — confirm 'under' keeps the reference.","skip_if":[]},{"id":"sub_subsequently","match":"subsequently","match_type":"word","replacements":["after"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_thereafter","match":"thereafter","match_type":"word","replacements":["then","afterwards"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_until_such_time_as","match":"until such time as","match_type":"phrase","replacements":["until"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_upon","match":"upon","match_type":"word","replacements":["on"],"morphology":"as_is","sense_guard":null,"skip_if":["once upon a time"]},{"id":"sub_utilise","match":"utilise","match_type":"word","replacements":["use"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_whilst","match":"whilst","match_type":"word","replacements":["while"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_reference_to","match":"with reference to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_regard_to","match":"with regard to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_respect_to","match":"with respect to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]}],"version":"2026.06.1"};

const AU_SPELLING_DATA = {"organize":"organise","organized":"organised","organizes":"organises","organizing":"organising","organization":"organisation","organizations":"organisations","recognize":"recognise","recognized":"recognised","recognizing":"recognising","realize":"realise","realized":"realised","realizing":"realising","analyze":"analyse","analyzed":"analysed","analyzing":"analysing","color":"colour","colors":"colours","colored":"coloured","behavior":"behaviour","behaviors":"behaviours","favor":"favour","favors":"favours","favorite":"favourite","honor":"honour","honored":"honoured","labor":"labour","neighbor":"neighbour","neighbors":"neighbours","center":"centre","centers":"centres","centered":"centred","meter":"metre","meters":"metres","theater":"theatre","fiber":"fibre","defense":"defence","offense":"offence","catalog":"catalogue","dialog":"dialogue","traveler":"traveller","traveled":"travelled","traveling":"travelling","modeling":"modelling","canceled":"cancelled","canceling":"cancelling","fulfill":"fulfil","gray":"grey","maximize":"maximise","minimize":"minimise","prioritize":"prioritise","emphasize":"emphasise","summarize":"summarise","customize":"customise","optimize":"optimise","standardize":"standardise","specialize":"specialise","apologize":"apologise","authorize":"authorise","finalize":"finalise","utilize":"utilise"};

/* ==================================================================== *
 *  PART 1 — DocumentAdapter : THE SEAM, now talking to REAL WORD.       *
 *                                                                      *
 *  Every method here uses Office.js (Word.run). Word's API is async:    *
 *  you queue commands, then `context.sync()` runs them and waits. So    *
 *  these methods return Promises, and the controller `await`s them.     *
 *                                                                      *
 *  Highlight-colour mapping (Word has a fixed palette, not free colour):*
 *    swap  -> "pink"       (reads as red)                               *
 *    spell -> "yellow"                                                  *
 *    flag  -> "turquoise"  (reads as blue)                              *
 * ==================================================================== */
const DocumentAdapter = (function () {
  const HL = { swap: 'pink', spell: 'yellow', flag: 'turquoise' };

  // Read the whole document as plain text.
  async function getText() {
    return Word.run(async (context) => {
      const body = context.document.body;
      body.load('text');
      await context.sync();
      return body.text;
    });
  }

  // Register a callback for when the user edits the document.
  // Word fires onParagraphChanged when text in any paragraph changes.
  async function onChange(cb) {
    return Word.run(async (context) => {
      context.document.onParagraphChanged.add(async () => { cb(); });
      await context.sync();
    });
  }

  // Replace the Nth occurrence (0-based) of `fromText` with `toText`.
  // Word's search returns ranges in document order, so we pick index N.
  async function replace(fromText, occurrence, toText) {
    return Word.run(async (context) => {
      const results = context.document.body.search(fromText, { matchCase: true, matchWholeWord: true });
      results.load('items');
      await context.sync();
      if (occurrence < results.items.length) {
        const range = results.items[occurrence];
        range.insertText(toText, Word.InsertLocation.replace);
        // clear any highlight left on the old word
        range.font.highlightColor = null;
        await context.sync();
        return true;
      }
      return false;
    });
  }

  // Apply highlight colours for a set of {from, occurrence, kind} marks.
  // We search per distinct surface form, then colour the right occurrences.
  // NOTE: unlike the mockup we work from surface forms + occurrence, because
  // Word's search is text-based, not character-offset based.
  async function markup(markList) {
    return Word.run(async (context) => {
      // group marks by their surface text so we search each word once
      const byText = {};
      markList.forEach(mk => {
        (byText[mk.from] = byText[mk.from] || []).push(mk);
      });

      // first clear existing highlights so stale marks don't pile up
      context.document.body.font.highlightColor = null;

      const searches = [];
      Object.keys(byText).forEach(text => {
        const r = context.document.body.search(text, { matchCase: true, matchWholeWord: true });
        r.load('items');
        searches.push({ text, results: r });
      });
      await context.sync();

      searches.forEach(({ text, results }) => {
        const marks = byText[text];
        marks.forEach(mk => {
          if (mk.occurrence < results.items.length) {
            results.items[mk.occurrence].font.highlightColor = HL[mk.kind];
          }
        });
      });
      await context.sync();
    });
  }

  // Remove every highlight in the document.
  async function clearMarks() {
    return Word.run(async (context) => {
      context.document.body.font.highlightColor = null;
      await context.sync();
    });
  }

  return { getText, onChange, replace, markup, clearMarks };
})();


/* ==================================================================== *
 *  PART 2 — Engine : pure text analysis. IDENTICAL to the mockup.       *
 *  Given a string, returns { suggestions, marks }. No Word, no DOM.     *
 * ==================================================================== */
const Engine = (function () {
  const D = ENGINE_DATA;
  const AU_SPELLING = AU_SPELLING_DATA;
  const entries = D.entries.map(e => ({ ...e, skipLower: (e.skip_if || []).map(s => s.toLowerCase()) }));
  const phraseEntries = entries.filter(e => e.match_type === 'phrase').sort((a, b) => b.match.length - a.match.length);
  const wordEntries = entries.filter(e => e.match_type === 'word');

  const PHRASE_INFLECT = {
    'collaborate with': { forms: ['collaborate with','collaborates with','collaborated with','collaborating with'],
                          out: ['work with','works with','worked with','working with'] }
  };

  function formIndexFor(match, surface) {
    const vf = D.verbForms[match]; if (!vf) return 0;
    const low = surface.toLowerCase();
    for (let i = 0; i < 4; i++) if (vf[i] === low) return i;
    return 0;
  }
  function inflectRepl(match, repl, idx) {
    const rf = D.replForms[match];
    if (rf && rf[repl]) return rf[repl][idx];
    return repl;
  }
  function matchCase(src, out) {
    if (src && src[0] === src[0].toUpperCase() && src[0] !== src[0].toLowerCase())
      return out.charAt(0).toUpperCase() + out.slice(1);
    return out;
  }
  function escapeRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function maskQuotes(text) {
    return text.replace(/(["\u201C\u201D])(.*?)(["\u201C\u201D])/gs, m => ' '.repeat(m.length));
  }
  function inSkip(masked, entry, idx, len) {
    if (!entry.skipLower.length) return false;
    const ctx = masked.slice(Math.max(0, idx - 22), Math.min(masked.length, idx + len + 22)).toLowerCase();
    return entry.skipLower.some(sk => ctx.includes(sk));
  }

  function analyse(rawText) {
    const masked = maskQuotes(rawText);
    let hits = [];
    function overlaps(s, e) { return hits.some(h => s < h.end && e > h.start); }

    // phrase pass
    phraseEntries.forEach(entry => {
      const infl = PHRASE_INFLECT[entry.match];
      let re, forms;
      if (infl) { forms = infl.forms; re = new RegExp('\\b(' + forms.map(escapeRe).join('|') + ')\\b', 'gi'); }
      else { re = new RegExp('\\b' + escapeRe(entry.match) + '\\b', 'gi'); }
      let m;
      while ((m = re.exec(masked)) !== null) {
        const idx = m.index, surf = m[0];
        if (overlaps(idx, idx + surf.length)) continue;
        if (inSkip(masked, entry, idx, surf.length)) continue;
        let base = entry.replacements[0];
        let alts = entry.replacements.slice(1);
        if (infl) {
          const fi = forms.findIndex(f => f.toLowerCase() === surf.toLowerCase());
          base = infl.out[fi >= 0 ? fi % infl.out.length : 0]; alts = [];
        }
        hits.push({ start: idx, end: idx + surf.length, from: surf,
          to: matchCase(surf, base), alts: alts.map(a => matchCase(surf, a)), note: entry.sense_guard || '' });
      }
    });

    // word pass
    wordEntries.forEach(entry => {
      const forms = D.verbForms[entry.match] || [entry.match];
      const alts = [...new Set(forms)].map(escapeRe);
      const re = new RegExp('\\b(' + alts.join('|') + ')\\b', 'gi');
      let m;
      while ((m = re.exec(masked)) !== null) {
        const idx = m.index, surf = m[0];
        if (overlaps(idx, idx + surf.length)) continue;
        if (inSkip(masked, entry, idx, surf.length)) continue;
        const fIdx = formIndexFor(entry.match, surf);
        const reps = entry.replacements.map(r => matchCase(surf, inflectRepl(entry.match, r, fIdx)));
        hits.push({ start: idx, end: idx + surf.length, from: surf, to: reps[0], alts: reps.slice(1), note: entry.sense_guard || '' });
      }
    });

    hits.sort((a, b) => a.start - b.start);

    // suggestions for the sidebar (occurrence numbering per surface form)
    const seen = {};
    const suggestions = hits.map((h, i) => {
      const occurrence = seen[h.from] = (seen[h.from] === undefined ? 0 : seen[h.from] + 1);
      return { id: 'h' + i, from: h.from, to: h.to, alts: h.alts, note: h.note, occurrence };
    });

    // marks for Word highlighting. Each needs {from, occurrence, kind} so the
    // adapter can find it by text + occurrence (Word has no char offsets).
    const seenMark = {};
    function markOccurrence(text) {
      return seenMark[text] = (seenMark[text] === undefined ? 0 : seenMark[text] + 1);
    }
    let marks = [];
    // record swap marks in document order, reusing the same occurrence logic
    const seenSwap = {};
    hits.forEach(h => {
      const occ = seenSwap[h.from] = (seenSwap[h.from] === undefined ? 0 : seenSwap[h.from] + 1);
      marks.push({ from: h.from, occurrence: occ, kind: 'swap', start: h.start, end: h.end });
    });

    function spanTaken(s, e) { return marks.some(mk => s < mk.end && e > mk.start); }

    // spelling (yellow)
    Object.keys(AU_SPELLING).forEach(us => {
      const re = new RegExp('\\b' + escapeRe(us) + '\\b', 'gi');
      let m;
      while ((m = re.exec(masked)) !== null) {
        const s = m.index, e = s + m[0].length;
        if (spanTaken(s, e)) continue;
        marks.push({ from: m[0], occurrence: occForText(m[0], s), kind: 'spell', start: s, end: e });
      }
    });

    // long sentences (blue)
    let sentRe = /[^.!?]+[.!?]+/g, sm;
    while ((sm = sentRe.exec(rawText)) !== null) {
      const words = sm[0].trim().split(/\s+/).filter(Boolean).length;
      if (words > 25) {
        // highlight the sentence by its first ~6 words to keep the search short
        const lead = sm[0].trim().split(/\s+/).slice(0, 6).join(' ');
        marks.push({ from: lead, occurrence: occForText(lead, sm.index), kind: 'flag', start: sm.index, end: sm.index + lead.length });
      }
    }

    // passive voice (blue)
    const pvRe = /\b(is|are|was|were|be|been|being)\s+(\w+ed|made|held|given|taken|sent|paid|built|shown)\b/gi;
    let pv;
    while ((pv = pvRe.exec(masked)) !== null) {
      const s = pv.index, e = s + pv[0].length;
      if (marks.some(mk => mk.kind !== 'flag' && s < mk.end && e > mk.start)) continue;
      marks.push({ from: pv[0], occurrence: occForText(pv[0], s), kind: 'flag', start: s, end: e });
    }

    // helper: occurrence index of `text` counted by start position so far
    function occForText(text, startPos) {
      const before = marks.filter(mk => mk.from === text && mk.start < startPos).length;
      return before;
    }

    marks.sort((a, b) => a.start - b.start);
    return { suggestions, marks };
  }

  return { analyse };
})();


/* ==================================================================== *
 *  PART 3 — UI controller. Nearly identical to the mockup; the only     *
 *  change is that adapter calls are async, so we await them.            *
 * ==================================================================== */
function startPlainform() {
  const sugList   = document.getElementById('sugList');
  const emptyState= document.getElementById('emptyState');
  const statusEl  = document.getElementById('status');
  const statusText= document.getElementById('statusText');
  const autoToggle= document.getElementById('autoToggle');
  const scanBtn   = document.getElementById('scanBtn');
  const ctlHint   = document.getElementById('ctlHint');
  const clearHlBtn= document.getElementById('clearHlBtn');

  // reveal the UI now that Word is connected
  document.getElementById('boot').style.display = 'none';
  document.getElementById('controls').style.display = '';
  document.getElementById('legend').style.display = '';
  statusEl.style.display = '';

  let chosen = {};
  let debounceTimer = null;
  let scanning = false;

  function setStatus(kind, text) { statusEl.className = 'status ' + (kind || ''); statusText.textContent = text; }
  function escapeHtml(s){ return (s||'').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

  async function scan() {
    if (scanning) return;       // avoid overlapping Word.run calls
    scanning = true;
    setStatus('scanning', 'Scanning…');
    try {
      const text = await DocumentAdapter.getText();
      const { suggestions, marks } = Engine.analyse(text);
      await DocumentAdapter.markup(marks);
      render(suggestions);
    } catch (e) {
      setStatus('', 'Could not read the document. Try Scan now.');
      console.error(e);
    } finally {
      scanning = false;
    }
  }

  function render(suggestions) {
    sugList.innerHTML = '';
    if (!suggestions.length) {
      emptyState.style.display = '';
      emptyState.querySelector('.big').textContent = 'Looks plain';
      emptyState.querySelector('.big').style.color = 'var(--apply)';
      emptyState.querySelector('.sub').textContent = 'No Style Manual word swaps found. Any spelling or sentence issues are highlighted in the document.';
      setStatus('clean', 'No suggestions — the text already reads plainly.');
      return;
    }
    emptyState.style.display = 'none';
    setStatus('found', suggestions.length + (suggestions.length === 1 ? ' suggestion' : ' suggestions') + ' found.');

    suggestions.forEach(s => {
      const li = document.createElement('li');
      li.className = 'sug';
      const altChips = (s.alts && s.alts.length)
        ? '<div class="alt-pick">' + [s.to, ...s.alts].map((opt, i) =>
            '<button class="chip" data-opt="' + escapeHtml(opt) + '"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + escapeHtml(opt) + '</button>').join('') + '</div>'
        : '';
      li.innerHTML =
        '<div class="sug-change"><span class="sug-from">' + escapeHtml(s.from) + '</span>' +
        '<span class="sug-arrow">→</span><span class="sug-to" data-to>' + escapeHtml(s.to) + '</span></div>' +
        (s.note ? '<p class="sug-note">' + escapeHtml(s.note) + '</p>' : '') +
        '<div class="sug-acts">' + altChips +
          '<button class="mini" data-ignore>Ignore</button>' +
          '<button class="mini apply" data-apply>Apply</button>' +
        '</div>';
      chosen[s.id] = s.to;

      li.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          li.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
          chip.setAttribute('aria-pressed', 'true');
          chosen[s.id] = chip.dataset.opt;
          li.querySelector('[data-to]').textContent = chip.dataset.opt;
        });
      });

      li.querySelector('[data-apply]').addEventListener('click', async () => {
        const ok = await DocumentAdapter.replace(s.from, s.occurrence, chosen[s.id]);
        if (ok) {
          li.style.transition = 'opacity .2s, transform .2s';
          li.style.opacity = '0'; li.style.transform = 'translateX(8px)';
          setTimeout(async () => { li.remove(); afterListChange(); await scan(); }, 220);
        }
      });
      li.querySelector('[data-ignore]').addEventListener('click', () => { li.remove(); afterListChange(); });
      sugList.appendChild(li);
    });
  }

  function afterListChange() {
    const remaining = sugList.children.length;
    if (remaining === 0) {
      emptyState.style.display = '';
      emptyState.querySelector('.big').textContent = 'All done';
      emptyState.querySelector('.big').style.color = 'var(--apply)';
      emptyState.querySelector('.sub').textContent = 'Every suggestion has been applied or ignored.';
      setStatus('clean', 'Nothing left to review.');
    } else {
      setStatus('found', remaining + (remaining === 1 ? ' suggestion' : ' suggestions') + ' left.');
    }
  }

  function scheduleScan() {
    if (!autoToggle.checked) return;
    setStatus('scanning', 'Typing…');
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(scan, 700);
  }
  DocumentAdapter.onChange(scheduleScan);

  autoToggle.addEventListener('change', () => {
    if (autoToggle.checked) { ctlHint.textContent = 'Scanning automatically when you pause typing.'; scan(); }
    else { clearTimeout(debounceTimer); ctlHint.textContent = 'Automatic scanning off. Use Scan now to check the document.'; setStatus('', 'Automatic scanning is off.'); }
  });

  scanBtn.addEventListener('click', scan);
  clearHlBtn.addEventListener('click', async () => { await DocumentAdapter.clearMarks(); setStatus('', 'Highlights cleared.'); });

  // theme
  const themeBtn = document.getElementById('themeBtn');
  let dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  function applyTheme() { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); themeBtn.textContent = dark ? '☀' : '◐'; }
  if (dark) applyTheme();
  themeBtn.addEventListener('click', () => { dark = !dark; applyTheme(); });

  // first scan once everything is wired
  scan();
}

/* ---- Boot: wait for Office.js to confirm Word is ready ---- */
Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    startPlainform();
  } else {
    const boot = document.getElementById('boot');
    boot.className = 'boot err';
    boot.textContent = 'Plainform runs in Microsoft Word. This host isn’t Word.';
  }
});
