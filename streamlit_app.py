from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Nahwu Scaffolding", page_icon="📖", layout="wide",
                   initial_sidebar_state="collapsed")

# Sembunyikan header/footer Streamlit agar tampilan penuh
st.markdown(
    "<style>header,footer,#MainMenu{visibility:hidden}"
    ".block-container{padding:0!important;max-width:100%!important}</style>",
    unsafe_allow_html=True,
)

root = Path(__file__).parent
read = lambda p: (root / p).read_text(encoding="utf-8")

# Gabungkan CSS dan JS ke dalam index.html supaya satu halaman utuh
html = read("index.html")
html = html.replace('<link rel="stylesheet" href="css/style.css">', f"<style>{read('css/style.css')}</style>")
html = html.replace('<script src="js/data.js"></script>', f"<script>{read('js/data.js')}</script>")
html = html.replace('<script src="js/app.js"></script>', f"<script>{read('js/app.js')}</script>")

components.html(html, height=3200, scrolling=True)
