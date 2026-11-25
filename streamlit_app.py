from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Nahwu Scaffolding",
    page_icon="📖",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    "<style>header,footer,#MainMenu{visibility:hidden}"
    ".block-container{padding:0!important;max-width:100%!important}</style>",
    unsafe_allow_html=True,
)

root = Path(__file__).parent


def read(name: str) -> str:
    hits = sorted(root.rglob(name), key=lambda p: len(p.parts))
    if not hits:
        st.error(f"File '{name}' tidak ditemukan di repo. Pastikan sudah diunggah ke GitHub.")
        st.stop()
    return hits[0].read_text(encoding="utf-8")


html = read("index.html")
html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>{read('style.css')}</style>")
html = html.replace('<link rel="stylesheet" href="css/style.css">', f"<style>{read('style.css')}</style>")
html = html.replace('<script src="data.js"></script>', f"<script>{read('data.js')}</script>")
html = html.replace('<script src="js/data.js"></script>', f"<script>{read('data.js')}</script>")
html = html.replace('<script src="app.js"></script>', f"<script>{read('app.js')}</script>")
html = html.replace('<script src="js/app.js"></script>', f"<script>{read('app.js')}</script>")

components.html(html, height=3400, scrolling=True)
