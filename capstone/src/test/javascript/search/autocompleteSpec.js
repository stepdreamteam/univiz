describe('Autocomplete Suggests correct array', () => {
  it('Tests Proper List Element Creation Simple', () => {
    const arrElt = 'Hello';
    const val = 'He';
    const listElmtActual = createListElmt(arrElt, val).toString();
    const listElmtExpected = '<div><strong>He</strong>llo</div>';
    expect(listElmtExpected).toEqual(listElmtActual);
  });
  
  it('Tests Proper List Element Creation Complex', () => {
    const arrElt = 'Hallo Hello';
    const val = 'He';
    const listElmtActual = createListElmt(arrElt, val).toString();
    const listElmtExpected = '<div>Hallo <strong>He</strong>llo</div>';
    expect(listElmtExpected).toEqual(listElmtActual);
  });
});
