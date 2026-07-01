/* ====================================================================
 *  Plainform for Word — taskpane.js  (v2: features #1,#2,#12,#15,#16,#17 + Help)
 * ==================================================================== */

const ENGINE_DATA = {"verbForms":{"acquire":["acquire","acquires","acquired","acquiring"],"ascertain":["ascertain","ascertains","ascertained","ascertaining"],"assist":["assist","assists","assisted","assisting"],"attempt":["attempt","attempts","attempted","attempting"],"cease":["cease","ceases","ceased","ceasing"],"commence":["commence","commences","commenced","commencing"],"disburse":["disburse","disburses","disbursed","disbursing"],"discontinue":["discontinue","discontinues","discontinued","discontinuing"],"dispatch":["dispatch","dispatches","dispatched","dispatching"],"exit":["exit","exits","exited","exiting"],"impact":["impact","impacts","impacted","impacting"],"implement":["implement","implements","implemented","implementing"],"inquire":["inquire","inquires","inquired","inquiring"],"leverage":["leverage","leverages","leveraged","leveraging"],"obtain":["obtain","obtains","obtained","obtaining"],"require":["require","requires","required","requiring"],"utilise":["utilise","utilises","utilised","utilising"],"desire":["desire","desires","desired","desiring"],"table":["table","tables","tabled","tabling"]},"replForms":{"acquire":{"buy":["buy","buys","bought","buying"],"get":["get","gets","got","getting"]},"ascertain":{"find out":["find out","finds out","found out","finding out"]},"assist":{"help":["help","helps","helped","helping"],"support":["support","supports","supported","supporting"],"guide":["guide","guides","guided","guiding"]},"attempt":{"try":["try","tries","tried","trying"]},"cease":{"stop":["stop","stops","stopped","stopping"],"end":["end","ends","ended","ending"]},"commence":{"start":["start","starts","started","starting"],"begin":["begin","begins","began","beginning"]},"disburse":{"pay":["pay","pays","paid","paying"]},"discontinue":{"stop":["stop","stops","stopped","stopping"],"end":["end","ends","ended","ending"]},"dispatch":{"send":["send","sends","sent","sending"]},"exit":{"leave":["leave","leaves","left","leaving"]},"impact":{"affect":["affect","affects","affected","affecting"]},"implement":{"apply":["apply","applies","applied","applying"],"install":["install","installs","installed","installing"],"do":["do","does","did","doing"],"start":["start","starts","started","starting"]},"inquire":{"ask":["ask","asks","asked","asking"]},"leverage":{"use":["use","uses","used","using"],"build on":["build on","builds on","built on","building on"]},"obtain":{"get":["get","gets","got","getting"],"have":["have","has","had","having"]},"require":{"need":["need","needs","needed","needing"],"must":["must","must","must","must"]},"utilise":{"use":["use","uses","used","using"]},"desire":{"want":["want","wants","wanted","wanting"]},"table":{"address":["address","addresses","addressed","addressing"],"discuss":["discuss","discusses","discussed","discussing"],"release":["release","releases","released","releasing"]}},"entries":[{"id":"sub_acquire","match":"acquire","match_type":"word","replacements":["buy","get"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_additional","match":"additional","match_type":"word","replacements":["more","extra"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_adequate_number_of","match":"adequate number of","match_type":"phrase","replacements":["enough"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_advising_in_relation_to","match":"advising in relation to","match_type":"phrase","replacements":["advising on","advising about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_amongst","match":"amongst","match_type":"word","replacements":["among"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_a_number_of","match":"a number of","match_type":"phrase","replacements":["some","many","few"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_approximately","match":"approximately","match_type":"word","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_as_a_consequence_of","match":"as a consequence of","match_type":"phrase","replacements":["because"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_ascertain","match":"ascertain","match_type":"word","replacements":["find out"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_assist","match":"assist","match_type":"word","replacements":["help","support","guide"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_at_a_later_date","match":"at a later date","match_type":"phrase","replacements":["later","soon"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_at_this_point_in_time","match":"at this point in time","match_type":"phrase","replacements":["now"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_cease","match":"cease","match_type":"word","replacements":["stop","end"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_cognisant_of","match":"cognisant of","match_type":"phrase","replacements":["aware of","know"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_collaborate_with","match":"collaborate with","match_type":"phrase","replacements":["work with"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_commence","match":"commence","match_type":"word","replacements":["start","begin"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_concerning","match":"concerning","match_type":"word","replacements":["about"],"morphology":"as_is","sense_guard":"Only the preposition meaning 'about'.","skip_if":["concerning trend","deeply concerning","is concerning","very concerning","concerning herself","concerning himself","concerning themselves","was concerning","is deeply concerning"]},{"id":"sub_consequently","match":"consequently","match_type":"word","replacements":["so"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_create_a_dialogue","match":"create a dialogue","match_type":"phrase","replacements":["speak","discuss","talk"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_desire","match":"desire","match_type":"word","replacements":["want"],"morphology":"inflect","sense_guard":"Prefer the verb.","skip_if":[]},{"id":"sub_despite_the_fact_that","match":"despite the fact that","match_type":"phrase","replacements":["although"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_disburse","match":"disburse","match_type":"word","replacements":["pay"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_discontinue","match":"discontinue","match_type":"word","replacements":["stop","end"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_dispatch","match":"dispatch","match_type":"word","replacements":["send"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_due_to_the_fact_that","match":"due to the fact that","match_type":"phrase","replacements":["because"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_exit","match":"exit","match_type":"word","replacements":["leave"],"morphology":"inflect","sense_guard":"Verb only.","skip_if":["the exit","emergency exit","exit sign","exit row"]},{"id":"sub_give_consideration_to","match":"give consideration to","match_type":"phrase","replacements":["consider"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_impact","match":"impact","match_type":"word","replacements":["affect"],"morphology":"inflect","sense_guard":"Only the verb meaning 'affect'.","skip_if":["the impact","an impact","impact assessment","environmental impact","impact statement","social impact"]},{"id":"sub_implement","match":"implement","match_type":"word","replacements":["apply","install","do","start"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_in_order_to","match":"in order to","match_type":"phrase","replacements":["to"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_relation_to","match":"in relation to","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_regards_to","match":"in regards to","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_respect_of","match":"in respect of","match_type":"phrase","replacements":["about","on"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_in_the_event_that","match":"in the event that","match_type":"phrase","replacements":["if","when"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_inquire","match":"inquire","match_type":"word","replacements":["ask"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_make_an_application","match":"make an application","match_type":"phrase","replacements":["apply"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_make_a_complaint","match":"make a complaint","match_type":"phrase","replacements":["complain"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_manner","match":"manner","match_type":"word","replacements":["way"],"morphology":"as_is","sense_guard":"Only when it means 'way'.","skip_if":["bedside manner","all manner of","good manners","bad manners","manner of speaking"]},{"id":"sub_notwithstanding","match":"notwithstanding","match_type":"word","replacements":["even though","though","despite"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_obtain","match":"obtain","match_type":"word","replacements":["get","have"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_prior_to","match":"prior to","match_type":"phrase","replacements":["before"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_primary","match":"primary","match_type":"word","replacements":["main"],"morphology":"as_is","sense_guard":"Only when it means 'chief'.","skip_if":["primary school","primary care","primary election","primary key","primary producer","primary industry","primary source","primary colour","primary colours"]},{"id":"sub_provide_a_response_to","match":"provide a response to","match_type":"phrase","replacements":["respond to"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_provide_assistance_with","match":"provide assistance with","match_type":"phrase","replacements":["help","support"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_pursuant_to","match":"pursuant to","match_type":"phrase","replacements":["under"],"morphology":"as_is","sense_guard":"Legal phrasing — confirm 'under' keeps the reference.","skip_if":[]},{"id":"sub_subsequently","match":"subsequently","match_type":"word","replacements":["after"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_thereafter","match":"thereafter","match_type":"word","replacements":["then","afterwards"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_until_such_time_as","match":"until such time as","match_type":"phrase","replacements":["until"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_upon","match":"upon","match_type":"word","replacements":["on"],"morphology":"as_is","sense_guard":null,"skip_if":["once upon a time"]},{"id":"sub_utilise","match":"utilise","match_type":"word","replacements":["use"],"morphology":"inflect","sense_guard":null,"skip_if":[]},{"id":"sub_whilst","match":"whilst","match_type":"word","replacements":["while"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_reference_to","match":"with reference to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_regard_to","match":"with regard to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]},{"id":"sub_with_respect_to","match":"with respect to","match_type":"phrase","replacements":["about"],"morphology":"as_is","sense_guard":null,"skip_if":[]}],"version":"2026.06.1"};

const AU_SPELLING_DATA = {"organize":"organise","organized":"organised","organizes":"organises","organizing":"organising","organization":"organisation","organizations":"organisations","recognize":"recognise","recognized":"recognised","recognizing":"recognising","realize":"realise","realized":"realised","realizing":"realising","analyze":"analyse","analyzed":"analysed","analyzing":"analysing","color":"colour","colors":"colours","colored":"coloured","behavior":"behaviour","behaviors":"behaviours","favor":"favour","favors":"favours","favorite":"favourite","honor":"honour","honored":"honoured","labor":"labour","neighbor":"neighbour","neighbors":"neighbours","center":"centre","centers":"centres","centered":"centred","meter":"metre","meters":"metres","theater":"theatre","fiber":"fibre","defense":"defence","offense":"offence","catalog":"catalogue","dialog":"dialogue","traveler":"traveller","traveled":"travelled","traveling":"travelling","modeling":"modelling","canceled":"cancelled","canceling":"cancelling","fulfill":"fulfil","gray":"grey","maximize":"maximise","minimize":"minimise","prioritize":"prioritise","emphasize":"emphasise","summarize":"summarise","customize":"customise","optimize":"optimise","standardize":"standardise","specialize":"specialise","apologize":"apologise","authorize":"authorise","finalize":"finalise","utilize":"utilise"};

/* ==================================================================== *
 *  PART 1 — DocumentAdapter : the seam to real Word (Office.js).        *
 * ==================================================================== */
const DocumentAdapter = (function () {
  // Soft, muted underline colours (custom hex — Word allows any RGB for underlines,
  // unlike highlight blocks which are limited to a few harsh named colours).
  const UL = {
    swap:  '#c2576b',   // muted rose
    spell: '#b08423',   // muted amber
    flag:  '#5a7da6'    // muted slate blue
  };
  // Underline STYLE per kind: swaps/spelling get a quiet dotted line,
  // flags get a wave (the familiar "something to look at" cue).
  const ULSTYLE = { swap: 'Dotted', spell: 'Dotted', flag: 'Wave' };

  async function getText() {
    return Word.run(async (context) => {
      const body = context.document.body;
      body.load('text');
      await context.sync();
      return body.text;
    });
  }

  async function onChange(cb) {
    return Word.run(async (context) => {
      context.document.onParagraphChanged.add(async () => { cb(); });
      await context.sync();
    });
  }

  // Replace the Nth occurrence of `fromText` with `toText`.
  // tracked=true turns on Word's change-tracking just for this edit (#17).
  // Searches fresh at apply-time so edits between scan and apply can't
  // mistarget; returns 'stale' if the occurrence no longer exists (#3).
  async function replace(fromText, occurrence, toText, tracked) {
    return Word.run(async (context) => {
      let prevTracking = null;
      if (tracked) {
        // remember the doc's current tracking mode, switch to TrackAll
        const doc = context.document;
        doc.load('changeTrackingMode');
        await context.sync();
        prevTracking = doc.changeTrackingMode;
        doc.changeTrackingMode = Word.ChangeTrackingMode.trackAll;
        await context.sync();
      }
      const results = context.document.body.search(fromText, { matchCase: true, matchWholeWord: true });
      results.load('items');
      await context.sync();

      let outcome = 'stale';
      if (occurrence < results.items.length) {
        const range = results.items[occurrence];
        range.insertText(toText, Word.InsertLocation.replace);
        range.font.highlightColor = null;
        await context.sync();
        outcome = true;
      }
      if (tracked && prevTracking !== null) {
        context.document.changeTrackingMode = prevTracking;
        await context.sync();
      }
      return outcome;
    });
  }

  const COMMENT_TAG = 'Plainform — ';   // prefix so we can find & clear our own comments

  // Paint soft underlines for every mark. If withComments is true, also attach
  // a Word comment carrying the issue + recommended change, so hovering/clicking
  // the word in the document shows the explanation in Word's own bubble.
  async function markup(markList, withComments) {
    return Word.run(async (context) => {
      const byText = {};
      markList.forEach(mk => { (byText[mk.from] = byText[mk.from] || []).push(mk); });

      // clear prior Plainform marks (underlines + our own comments) first
      clearUnderlinesIn(context.document.body);
      await deletePlainformComments(context);

      const searches = [];
      Object.keys(byText).forEach(text => {
        const r = context.document.body.search(text, { matchCase: true, matchWholeWord: true });
        r.load('items');
        searches.push({ text, results: r });
      });
      await context.sync();

      searches.forEach(({ text, results }) => {
        byText[text].forEach(mk => {
          if (mk.occurrence < results.items.length) {
            const range = results.items[mk.occurrence];
            range.font.underline = ULSTYLE[mk.kind] || 'Dotted';
            range.font.underlineColor = UL[mk.kind] || UL.flag;
            if (withComments && mk.explain) {
              try { range.insertComment(COMMENT_TAG + mk.explain); } catch (e) { /* older builds: skip */ }
            }
          }
        });
      });
      await context.sync();
    });
  }

  function clearUnderlinesIn(body) {
    body.font.underline = 'None';
    body.font.highlightColor = null;   // also clears any leftover highlight from older versions
  }

  // Delete only the comments Plainform created (identified by our prefix),
  // leaving the user's own comments untouched.
  async function deletePlainformComments(context) {
    const comments = context.document.body.getComments();
    comments.load('items');
    await context.sync();
    const texts = comments.items.map(c => { c.contentRange.load('text'); return c; });
    await context.sync();
    let removed = false;
    comments.items.forEach(c => {
      const t = c.contentRange.text || '';
      if (t.indexOf(COMMENT_TAG) === 0) { c.delete(); removed = true; }
    });
    if (removed) await context.sync();
  }

  async function clearMarks() {
    return Word.run(async (context) => {
      clearUnderlinesIn(context.document.body);
      await deletePlainformComments(context);
    });
  }

  // Read just the user's current selection (used by the AI review, so only the
  // chosen passage — never the whole document — is ever sent anywhere).
  async function getSelectionText() {
    return Word.run(async (context) => {
      const sel = context.document.getSelection();
      sel.load('text');
      await context.sync();
      return sel.text || '';
    });
  }

  // Replace the current selection with new text (used to apply an AI rewrite).
  async function replaceSelection(toText, tracked) {
    return Word.run(async (context) => {
      let prev = null;
      if (tracked) {
        const doc = context.document; doc.load('changeTrackingMode'); await context.sync();
        prev = doc.changeTrackingMode; doc.changeTrackingMode = Word.ChangeTrackingMode.trackAll; await context.sync();
      }
      const sel = context.document.getSelection();
      sel.insertText(toText, Word.InsertLocation.replace);
      await context.sync();
      if (tracked && prev !== null) { context.document.changeTrackingMode = prev; await context.sync(); }
    });
  }

  return { getText, onChange, replace, markup, clearMarks, getSelectionText, replaceSelection };
})();


/* ==================================================================== *
 *  PART 2 — Engine : pure analysis. Returns { suggestions, marks }.     *
 *  suggestions now include word swaps AND spelling (both clickable, #1).*
 *  marks now also include acronym (#12) and number/date (#15) flags.    *
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
  // small number words AGSM prefers spelled out (one–nine)
  const SMALL_NUMS = { '1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine' };

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

  function analyse(rawText, ignoreSet) {
    ignoreSet = ignoreSet || new Set();
    const masked = maskQuotes(rawText);
    let hits = []; // word/phrase swaps  {start,end,from,to,alts,note}
    function overlaps(s, e) { return hits.some(h => s < h.end && e > h.start); }

    // ---- phrase pass ----
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
        let base = entry.replacements[0], alts = entry.replacements.slice(1);
        if (infl) { const fi = forms.findIndex(f => f.toLowerCase() === surf.toLowerCase());
          base = infl.out[fi >= 0 ? fi % infl.out.length : 0]; alts = []; }
        hits.push({ start: idx, end: idx + surf.length, from: surf,
          to: matchCase(surf, base), alts: alts.map(a => matchCase(surf, a)), note: entry.sense_guard || '', cat: 'swap' });
      }
    });

    // ---- word pass ----
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
        hits.push({ start: idx, end: idx + surf.length, from: surf, to: reps[0], alts: reps.slice(1), note: entry.sense_guard || '', cat: 'swap' });
      }
    });

    // ---- spelling pass: now produces clickable suggestions too (#1) ----
    Object.keys(AU_SPELLING).forEach(us => {
      const re = new RegExp('\\b' + escapeRe(us) + '\\b', 'gi');
      let m;
      while ((m = re.exec(masked)) !== null) {
        const idx = m.index, surf = m[0];
        if (overlaps(idx, idx + surf.length)) continue;
        hits.push({ start: idx, end: idx + surf.length, from: surf,
          to: matchCase(surf, AU_SPELLING[us]), alts: [], note: 'Australian spelling', cat: 'spell' });
      }
    });

    hits.sort((a, b) => a.start - b.start);

    // suggestions for the sidebar (swaps + spelling), with occurrence numbers
    const seen = {};
    const suggestions = hits
      .filter(h => !ignoreSet.has(h.from.toLowerCase()))
      .map((h, i) => {
        const occurrence = seen[h.from] = (seen[h.from] === undefined ? 0 : seen[h.from] + 1);
        return { id: 'h' + i, from: h.from, to: h.to, alts: h.alts, note: h.note, cat: h.cat, occurrence };
      });

    // ---- marks for highlighting ----
    let marks = [];
    const seenSwap = {};
    hits.forEach(h => {
      if (ignoreSet.has(h.from.toLowerCase())) return;
      const occ = seenSwap[h.from] = (seenSwap[h.from] === undefined ? 0 : seenSwap[h.from] + 1);
      const label = h.cat === 'spell' ? 'Australian spelling' : 'Plainer wording';
      const extraNote = (h.note && h.note !== 'Australian spelling') ? '. ' + h.note : '';
      const explain = label + ': “' + h.from + '” → “' + h.to + '”'
        + (h.alts && h.alts.length ? ' (or ' + h.alts.map(a => '“' + a + '”').join(', ') + ')' : '')
        + extraNote;
      marks.push({ from: h.from, occurrence: occ, kind: h.cat === 'spell' ? 'spell' : 'swap',
                   start: h.start, end: h.end, explain });
    });
    function spanTaken(s, e) { return marks.some(mk => s < mk.end && e > mk.start); }
    function occForText(text, startPos) { return marks.filter(mk => mk.from === text && mk.start < startPos).length; }

    // flags collected separately so they can carry an explanation (#2)
    const flags = []; // {from, occurrence, kind:'flag', subtype, note, start, end}
    function addFlag(text, start, end, subtype, note) {
      if (spanTaken(start, end) && subtype !== 'sentence') return;
      const occ = occForText(text, start);
      const TITLE = { sentence:'Long sentence', passive:'Passive voice', doublneg:'Double negative',
                      acronym:'Undefined acronym', number:'Number format', date:'Date format' };
      const title = TITLE[subtype] || 'Check';
      const cleanNote = (note && note.toLowerCase().indexOf(title.toLowerCase()) === 0) ? '' : note;
      const mk = { from: text, occurrence: occ, kind: 'flag', subtype, note, start, end,
                   explain: title + (cleanNote ? ': ' + cleanNote : '.') };
      marks.push(mk); flags.push(mk);
    }

    // long sentences
    let sentRe = /[^.!?]+[.!?]+/g, sm;
    while ((sm = sentRe.exec(rawText)) !== null) {
      const words = sm[0].trim().split(/\s+/).filter(Boolean).length;
      if (words > 25) {
        const lead = sm[0].trim().split(/\s+/).slice(0, 6).join(' ');
        addFlag(lead, sm.index, sm.index + lead.length, 'sentence', words + ' words (AGSM suggests ~25 max).');
      }
    }
    // passive voice
    const pvRe = /\b(is|are|was|were|be|been|being)\s+(\w+ed|made|held|given|taken|sent|paid|built|shown)\b/gi;
    let pv;
    while ((pv = pvRe.exec(masked)) !== null) {
      addFlag(pv[0], pv.index, pv.index + pv[0].length, 'passive', 'Possible passive voice.');
    }
    // double negatives
    const dnRe = /\bnot\s+un(\w+)/gi; let dn;
    while ((dn = dnRe.exec(masked)) !== null) {
      addFlag(dn[0], dn.index, dn.index + dn[0].length, 'doublneg', 'Double negative.');
    }

    // ---- #12 acronyms: all-caps tokens (2+ letters) never defined with "(...)" ----
    const defined = new Set();
    // capture "Full Name (ABC)" style definitions
    let defRe = /\(([A-Z]{2,6})\)/g, dm;
    while ((dm = defRe.exec(rawText)) !== null) defined.add(dm[1]);
    const acRe = /\b([A-Z]{2,6})\b/g; let ac;
    const acSeen = {};
    while ((ac = acRe.exec(masked)) !== null) {
      const tok = ac[1];
      if (defined.has(tok)) continue;
      if (['THE','AND','FOR','NOT','ALL','ANY','MAY','WILL','PDF','CSV','OK','URL','USA','GST'].includes(tok)) continue;
      if (ignoreSet.has(tok.toLowerCase())) continue;
      const s = ac.index, e = s + tok.length;
      if (spanTaken(s, e)) continue;
      addFlag(tok, s, e, 'acronym', 'Acronym “' + tok + '” — define it on first use, e.g. “Full Name (' + tok + ')”.');
    }

    // ---- #15 number / date formatting ----
    // ambiguous numeric dates FIRST, so they claim digits before the
    // single-digit rule can grab the day/month numbers inside them.
    const dateRe = /\b(\d{1,2}\/\d{1,2}\/\d{2,4})\b/g; let dt;
    while ((dt = dateRe.exec(masked)) !== null) {
      const s = dt.index, e = s + dt[1].length;
      if (spanTaken(s, e)) continue;
      addFlag(dt[1], s, e, 'date', 'Ambiguous date — AGSM prefers “3 April 2025” to “3/4/2025”.');
    }
    // big numbers without thousands separators e.g. 10000
    const bigRe = /\b(\d{5,})\b/g; let bm;
    while ((bm = bigRe.exec(masked)) !== null) {
      const s = bm.index, e = s + bm[1].length;
      if (spanTaken(s, e)) continue;
      addFlag(bm[1], s, e, 'number', 'Large number — AGSM uses thousands separators (e.g. 10,000).');
    }
    // small digits 1–9 used as a standalone count before a word (e.g. "5 applicants").
    // Deliberately conservative — bare digits are too ambiguous to flag in general
    // (years, list numbers, references), so we require "<digit> <lowercase word>".
    const numRe = /\b([1-9])\s+([a-z]{3,})/g; let nm;
    while ((nm = numRe.exec(masked)) !== null) {
      const s = nm.index, e = s + 1;
      if (spanTaken(s, e)) continue;
      addFlag(nm[1], s, e, 'number', 'AGSM: spell out one–nine (“' + nm[1] + '” → “' + SMALL_NUMS[nm[1]] + '”).');
    }

    marks.sort((a, b) => a.start - b.start);
    flags.sort((a, b) => a.start - b.start);
    return { suggestions, marks, flags };
  }

  // expose number-word helper for the controller's double-neg fix
  return { analyse };
})();


/* ==================================================================== *
 *  PART 2b — AiModule : the OPTIONAL AI assistant (Gemini via relay).   *
 *                                                                      *
 *  SAFETY BY DESIGN — "off means off":                                 *
 *  - This module sends NOTHING anywhere on its own. It has no timers,   *
 *    no listeners, no background calls. It is inert until `review()` is *
 *    explicitly called by a deliberate user action.                    *
 *  - The controller only calls review() when BOTH the AI toggle is on   *
 *    AND the user clicked "Ask AI to review this passage".             *
 *  - When the toggle is off, the controller never references this       *
 *    module, so no document text is ever passed to it.                 *
 *                                                                      *
 *  HOW THE REAL CALL WORKS                                             *
 *  We POST the chosen passage to OUR relay (a Cloudflare Worker). The   *
 *  relay holds the secret Gemini key and forwards to Google, so the key *
 *  is NEVER in this browser code. If RELAY_URL is left as the          *
 *  placeholder, the module stays in safe demo mode and sends nothing.  *
 * ==================================================================== */
const CopilotModule = (function () {
  // >>> EDIT THIS to your Cloudflare Worker URL (see the setup guide). <<<
  // While it still contains 'REPLACE', the module runs in safe DEMO mode
  // and never makes a network call.
  const RELAY_URL = "https://plainform-relay.thomas-oleary-coleman-s.workers.dev/review";

  let ENABLED = false;   // mirrors the toggle; the controller sets this explicitly
  function setEnabled(on) { ENABLED = !!on; }
  function isEnabled() { return ENABLED; }
  function isLive() { return RELAY_URL.indexOf('REPLACE') === -1; }

  async function callAi(passage) {
    if (!ENABLED) throw new Error('AI is disabled — no text may be sent.');

    // DEMO mode: relay not configured yet → no network, nothing leaves the machine.
    if (!isLive()) {
      await new Promise(r => setTimeout(r, 400));
      return {
        rewrite: '[AI rewrite will appear here once the Gemini relay URL is set.]',
        reason: 'Demo mode — no text was sent anywhere. Set RELAY_URL to go live.',
        placeholder: true
      };
    }

    // LIVE mode: send ONLY the chosen passage to our relay, which adds the key.
    const res = await fetch(RELAY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passage })
    });
    if (!res.ok) {
      let msg = 'AI request failed (' + res.status + ').';
      try { const e = await res.json(); if (e.error) msg = e.error; } catch (x) {}
      throw new Error(msg);
    }
    const data = await res.json();
    return { rewrite: data.rewrite || '', reason: data.reason || '', placeholder: false };
  }

  // The ONLY entry point the controller uses. Guarded so it cannot run
  // unless explicitly enabled — a structural backstop, not just a UI check.
  async function review(passage) {
    if (!ENABLED) throw new Error('AI is disabled.');
    if (!passage || !passage.trim()) return null;
    return callAi(passage);
  }

  return { setEnabled, isEnabled, isLive, review };
})();


/* ==================================================================== *
 *  PART 3 — UI controller.                                              *
 * ==================================================================== */
function startPlainform() {
  const $ = id => document.getElementById(id);
  const sugList = $('sugList'), emptyState = $('emptyState'), statusEl = $('status'),
        statusText = $('statusText'), autoToggle = $('autoToggle'), scanBtn = $('scanBtn'),
        ctlHint = $('ctlHint'), clearHlBtn = $('clearHlBtn'), trackToggle = $('trackToggle'),
        commentsToggle = $('commentsToggle'),
        flagList = $('flagList'), flagSection = $('flagSection'),
        applyAllBtn = $('applyAllBtn'), exportCsvBtn = $('exportCsvBtn'),
        aiToggle = $('aiToggle'), aiSection = $('aiSection'), aiBody = $('aiBody'),
        aiReviewBtn = $('aiReviewBtn'), aiConsent = $('aiConsent'),
        aiConsentYes = $('aiConsentYes'), aiConsentNo = $('aiConsentNo');

  $('boot').style.display = 'none';
  ['controls','legend','status','tabsRow'].forEach(id => { const el = $(id); if (el) el.style.display = ''; });
  $('editorPanel').style.display = '';

  let chosen = {};
  let debounceTimer = null;
  let scanning = false;
  let lastResult = { suggestions: [], marks: [], flags: [] };
  const ignoreSet = new Set();         // #8-lite: words the user says "ignore" to
  const auditLog = [];                 // every action, for CSV export (#16)

  function setStatus(kind, text) { statusEl.className = 'status ' + (kind || ''); statusText.textContent = text; }
  function esc(s){ return (s||'').replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
  function tracked() { return trackToggle && trackToggle.checked; }
  function commentsOn() { return commentsToggle && commentsToggle.checked; }

  async function scan() {
    if (scanning) return;
    scanning = true;
    setStatus('scanning', 'Scanning…');
    try {
      const text = await DocumentAdapter.getText();
      const res = Engine.analyse(text, ignoreSet);
      lastResult = res;
      await DocumentAdapter.markup(res.marks, commentsOn());
      renderSuggestions(res.suggestions);
      renderFlags(res.flags);
    } catch (e) {
      setStatus('', 'Could not read the document. Try Scan now.');
      console.error(e);
    } finally { scanning = false; }
  }

  /* ---------- suggestions (swaps + spelling) ---------- */
  function renderSuggestions(suggestions) {
    sugList.innerHTML = '';
    applyAllBtn.style.display = suggestions.length ? '' : 'none';
    if (!suggestions.length) {
      emptyState.style.display = '';
      emptyState.querySelector('.big').textContent = 'Looks plain';
      emptyState.querySelector('.big').style.color = 'var(--apply)';
      emptyState.querySelector('.sub').textContent = 'No word or spelling swaps found. Any sentence or formatting issues appear below.';
      setStatus('clean', 'No swaps — the wording already reads plainly.');
      return;
    }
    emptyState.style.display = 'none';
    setStatus('found', suggestions.length + (suggestions.length === 1 ? ' swap' : ' swaps') + ' found.');

    suggestions.forEach(s => {
      const li = document.createElement('li');
      li.className = 'sug';
      const tag = s.cat === 'spell'
        ? '<span class="cat-tag spell">spelling</span>'
        : '<span class="cat-tag swap">word</span>';
      const altChips = (s.alts && s.alts.length)
        ? '<div class="alt-pick">' + [s.to, ...s.alts].map((opt, i) =>
            '<button class="chip" data-opt="' + esc(opt) + '"' + (i === 0 ? ' aria-pressed="true"' : '') + '>' + esc(opt) + '</button>').join('') + '</div>'
        : '';
      li.innerHTML =
        '<div class="sug-change">' + tag + '<span class="sug-from">' + esc(s.from) + '</span>' +
        '<span class="sug-arrow">→</span><span class="sug-to" data-to>' + esc(s.to) + '</span></div>' +
        (s.note ? '<p class="sug-note">' + esc(s.note) + '</p>' : '') +
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
        await applyOne(s, chosen[s.id], li);
      });
      li.querySelector('[data-ignore]').addEventListener('click', () => {
        ignoreSet.add(s.from.toLowerCase());
        logAudit(s.cat === 'spell' ? 'spelling' : 'word swap', s.from, s.to, 'ignored');
        li.remove(); afterSugChange();
      });
      sugList.appendChild(li);
    });
  }

  async function applyOne(s, to, li) {
    const outcome = await DocumentAdapter.replace(s.from, s.occurrence, to, tracked());
    if (outcome === true) {
      logAudit(s.cat === 'spell' ? 'spelling' : 'word swap', s.from, to, tracked() ? 'applied (tracked)' : 'applied');
      if (li) { li.style.transition = 'opacity .2s, transform .2s'; li.style.opacity = '0'; li.style.transform = 'translateX(8px)';
        setTimeout(async () => { li.remove(); afterSugChange(); await scan(); }, 200); }
      else { await scan(); }
    } else if (outcome === 'stale') {
      setStatus('', 'The document changed — rescanning.');
      await scan();
    }
  }

  // #6 Apply all: apply each swap, back-to-front by occurrence so earlier
  // edits don't shift later targets. We re-scan once at the end.
  applyAllBtn.addEventListener('click', async () => {
    const items = lastResult.suggestions.slice();
    applyAllBtn.disabled = true; applyAllBtn.textContent = 'Applying…';
    // group by surface text, apply highest occurrence first
    items.sort((a, b) => b.occurrence - a.occurrence);
    for (const s of items) {
      const to = chosen[s.id] || s.to;
      const outcome = await DocumentAdapter.replace(s.from, s.occurrence, to, tracked());
      if (outcome === true) logAudit(s.cat === 'spell' ? 'spelling' : 'word swap', s.from, to, tracked() ? 'applied (tracked)' : 'applied');
    }
    applyAllBtn.disabled = false; applyAllBtn.textContent = 'Apply all';
    await scan();
  });

  function afterSugChange() {
    const remaining = sugList.children.length;
    applyAllBtn.style.display = remaining ? '' : 'none';
    if (remaining === 0) {
      emptyState.style.display = '';
      emptyState.querySelector('.big').textContent = 'All done';
      emptyState.querySelector('.big').style.color = 'var(--apply)';
      emptyState.querySelector('.sub').textContent = 'Every swap has been applied or ignored.';
      setStatus('clean', 'Nothing left to review.');
    } else setStatus('found', remaining + (remaining === 1 ? ' swap' : ' swaps') + ' left.');
  }

  /* ---------- flags (explained, #2) ---------- */
  const FLAG_TITLES = { sentence:'Long sentence', passive:'Passive voice', doublneg:'Double negative',
                        acronym:'Undefined acronym', number:'Number format', date:'Date format' };
  function renderFlags(flags) {
    flagList.innerHTML = '';
    flagSection.style.display = flags.length ? '' : 'none';
    if (!flags.length) return;
    flags.forEach(f => {
      const li = document.createElement('li');
      li.className = 'flag-item';
      const canFix = f.subtype === 'doublneg' && dnFix(f.from);
      li.innerHTML =
        '<div class="flag-top"><span class="flag-kind ' + f.subtype + '">' + FLAG_TITLES[f.subtype] + '</span>' +
        '<span class="flag-text">' + esc(f.from) + (f.subtype==='sentence'?'…':'') + '</span></div>' +
        '<p class="flag-why">' + esc(f.note) + '</p>' +
        '<div class="flag-acts">' +
          (canFix ? '<button class="mini apply" data-fix>Fix → ' + esc(dnFix(f.from)) + '</button>' : '') +
          '<button class="mini" data-seen>Mark reviewed</button>' +
        '</div>';
      if (canFix) li.querySelector('[data-fix]').addEventListener('click', async () => {
        const to = dnFix(f.from);
        const outcome = await DocumentAdapter.replace(f.from, f.occurrence, to, tracked());
        if (outcome === true) { logAudit('double negative', f.from, to, tracked()?'applied (tracked)':'applied'); li.remove(); await scan(); }
        else if (outcome === 'stale') await scan();
      });
      li.querySelector('[data-seen]').addEventListener('click', () => {
        logAudit('flag: ' + f.subtype, f.from, '', 'reviewed, kept');
        li.style.opacity = '.5'; li.querySelector('.flag-acts').remove();
      });
      flagList.appendChild(li);
    });
  }
  // "not unreasonable" -> "reasonable" (only clean flips)
  function dnFix(surf) {
    const m = String(surf).match(/^not\s+un([a-z]+)$/i);
    if (!m) return null;
    const known = ['reasonable','likely','usual','common','important','clear','fair','able','aware','willing','necessary','acceptable','helpful','related','wise','popular','expected'];
    let stem = m[1];
    if (!known.includes(stem.toLowerCase())) return null;
    if (/^[A-Z]/.test(surf)) stem = stem.charAt(0).toUpperCase() + stem.slice(1);
    return stem;
  }

  /* ---------- audit log + CSV export (#16) ---------- */
  function logAudit(type, from, to, status) {
    auditLog.push({ when: new Date().toISOString(), type, from, to, status });
  }
  function exportCsv() {
    const head = ['#','time','type','original','change','status'];
    const rows = [head].concat(auditLog.map((r, i) => [i+1, r.when, r.type, r.from, r.to, r.status]));
    const csv = rows.map(r => r.map(c => {
      c = (c == null ? '' : String(c));
      return /[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c;
    }).join(',')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'Plainform-audit-log.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  exportCsvBtn.addEventListener('click', () => {
    if (!auditLog.length) { setStatus('', 'No changes logged yet — apply or review something first.'); return; }
    exportCsv();
  });

  /* ---------- controls ---------- */
  function scheduleScan() {
    if (!autoToggle.checked) return;
    setStatus('scanning', 'Typing…');
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(scan, 700);
  }
  DocumentAdapter.onChange(scheduleScan);

  autoToggle.addEventListener('change', () => {
    if (autoToggle.checked) { ctlHint.textContent = 'Scanning automatically when you pause typing.'; scan(); }
    else { clearTimeout(debounceTimer); ctlHint.textContent = 'Automatic scanning off. Use Scan now.'; setStatus('', 'Automatic scanning is off.'); }
  });
  scanBtn.addEventListener('click', scan);
  if (commentsToggle) commentsToggle.addEventListener('change', () => { scan(); });

  /* ---------- AI assistant (Copilot) — off by default, opt-in to enable ----------
     The toggle starts OFF. Turning it on shows a consent notice first; only an
     explicit "Continue" actually enables the module. Turning it off immediately
     disables the module and hides the AI section so no path can reach Copilot. */
  let aiConfirmed = false;   // becomes true only after the user accepts the notice
  aiToggle.checked = false;  // hard default OFF every session
  CopilotModule.setEnabled(false);

  aiToggle.addEventListener('change', () => {
    if (aiToggle.checked) {
      if (aiConfirmed) { enableAI(); }
      else {
        // show consent first; keep the module disabled until they accept
        aiToggle.checked = false;     // revert visually until confirmed
        aiConsent.style.display = '';
      }
    } else {
      disableAI();
    }
  });
  aiConsentYes.addEventListener('click', () => {
    aiConfirmed = true;
    aiConsent.style.display = 'none';
    aiToggle.checked = true;
    enableAI();
  });
  aiConsentNo.addEventListener('click', () => {
    aiConsent.style.display = 'none';
    aiToggle.checked = false;
    disableAI();
  });

  function enableAI() {
    CopilotModule.setEnabled(true);
    aiSection.style.display = '';
    aiBody.innerHTML = '<p class="ai-hint">Select a paragraph in your document, then choose ' +
      '<b>Ask AI to review</b>. Only the passage you pick is sent — never the whole document, ' +
      'and never automatically.</p>';
    setStatus('', 'AI assistant on. Text is sent only when you click review.');
  }
  function disableAI() {
    CopilotModule.setEnabled(false);
    aiSection.style.display = 'none';
    aiBody.innerHTML = '';
    setStatus('', 'AI assistant off. Nothing is sent to Gemini.');
  }

  aiReviewBtn.addEventListener('click', async () => {
    // double guard: never proceed unless the module is genuinely enabled
    if (!CopilotModule.isEnabled()) { disableAI(); return; }
    aiBody.innerHTML = '<p class="ai-hint">Reviewing the selected passage…</p>';
    let passage = '';
    try {
      passage = await DocumentAdapter.getSelectionText();
    } catch (e) { passage = ''; }
    if (!passage || !passage.trim()) {
      aiBody.innerHTML = '<p class="ai-hint">Select some text in the document first, then try again.</p>';
      return;
    }
    try {
      const result = await CopilotModule.review(passage);
      renderAiResult(passage, result);
    } catch (e) {
      aiBody.innerHTML = '<p class="ai-hint">Could not get an AI suggestion. ' + esc(e.message) + '</p>';
    }
  });

  function renderAiResult(passage, result) {
    if (!result) { aiBody.innerHTML = '<p class="ai-hint">No suggestion returned.</p>'; return; }
    const tag = result.placeholder
      ? '<div class="ai-note">Placeholder mode — no text left your machine. Set the relay URL in the code to go live.</div>'
      : '';
    aiBody.innerHTML = tag +
      '<div class="ai-card">' +
        '<div class="ai-label">Suggested rewrite</div>' +
        '<div class="ai-rewrite">' + esc(result.rewrite) + '</div>' +
        (result.reason ? '<p class="ai-reason">' + esc(result.reason) + '</p>' : '') +
        '<div class="ai-acts">' +
          '<button class="mini" id="aiDismiss">Dismiss</button>' +
          (result.placeholder ? '' : '<button class="mini apply" id="aiApply">Replace selection</button>') +
        '</div>' +
      '</div>';
    const dismiss = $('aiDismiss'); if (dismiss) dismiss.addEventListener('click', () => { aiBody.querySelector('.ai-card').remove(); });
    const apply = $('aiApply');
    if (apply) apply.addEventListener('click', async () => {
      await DocumentAdapter.replaceSelection(result.rewrite, tracked());
      logAudit('AI rewrite', passage.slice(0, 40) + '…', '(rewritten)', tracked() ? 'applied (tracked)' : 'applied');
      aiBody.innerHTML = '<p class="ai-hint">Applied. Select another paragraph to review more.</p>';
      await scan();
    });
  }

  clearHlBtn.addEventListener('click', async () => { await DocumentAdapter.clearMarks(); setStatus('', 'Marks cleared.'); });

  /* ---------- tabs: Editor / Help ---------- */
  const tabEditor = $('tabEditor'), tabHelp = $('tabHelp'),
        editorPanel = $('editorPanel'), helpPanel = $('helpPanel');
  function showTab(which) {
    const ed = which === 'editor';
    tabEditor.setAttribute('aria-selected', ed ? 'true' : 'false');
    tabHelp.setAttribute('aria-selected', ed ? 'false' : 'true');
    editorPanel.style.display = ed ? '' : 'none';
    helpPanel.style.display = ed ? 'none' : '';
  }
  tabEditor.addEventListener('click', () => showTab('editor'));
  tabHelp.addEventListener('click', () => showTab('help'));

  /* ---------- theme ---------- */
  const themeBtn = $('themeBtn');
  let dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  function applyTheme() { document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); themeBtn.textContent = dark ? '☀' : '◐'; }
  if (dark) applyTheme();
  themeBtn.addEventListener('click', () => { dark = !dark; applyTheme(); });

  scan();
}

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) startPlainform();
  else {
    const boot = document.getElementById('boot');
    boot.className = 'boot err';
    boot.textContent = 'Plainform runs in Microsoft Word. This host isn’t Word.';
  }
});
