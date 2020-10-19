export const onClick = (int, id1, id2, id3, id4) => {
  if (id1 === 'P.SILENT_SCOPE') {
    if (document.getElementById(id1).style.borderColor === 'rgb(0, 255, 0)') {
      document.getElementById(id1).style.borderColor = '#ed7f10';
      return 120;
    } else if (document.getElementById(id1).style.borderColor ===
      'rgb(237, 127, 16)') {
      document.getElementById(id1).style.borderColor = 'transparent';
      return 0;
    } else {
      document.getElementById(id1).style.borderColor = '#00ff00';
      return 240;
    }
  } else if (document.getElementById(id1).style.borderColor === 'rgb(0, 255, 0)'
  ) {
    document.getElementById(id1).style.borderColor = 'transparent';
    return 0;
  } else {
    document.getElementById(id1).style.borderColor = '#00ff00';
    if (id2 != null && id3 != null && id4 != null) {
      document.getElementById(id2).style.borderColor = 'transparent';
      document.getElementById(id3).style.borderColor = 'transparent';
      document.getElementById(id4).style.borderColor = 'transparent';
    } else if (id2 != null && id3 != null) {
      document.getElementById(id2).style.borderColor = 'transparent';
      document.getElementById(id3).style.borderColor = 'transparent';
    }
    return int;
  }
};
