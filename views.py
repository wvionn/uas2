from flask import Blueprint, render_template,request, jsonify, redirect, url_for

views = Blueprint("views",__name__)

HEWAN_PURBA = ""

@views.route("/")
def home():
    return render_template("cover.html")

@views.route('/profile')
def profile():
    q = request.args.get('q', '').strip().lower()
    if q:
        for hewan in HEWAN_PURBA:
            if q in hewan["nama"].lower():
                # Redirect ke halaman detail
                return redirect(url_for('views.detail_hewan', nama=hewan["nama"]))
    return render_template('profile.html', hasil=None)


@views.route('/hewan/<nama>')
def detail_hewan(nama):
    hasil = None
    for hewan in HEWAN_PURBA:
        if nama.lower() == hewan["nama"].lower():
            hasil = hewan
            break
    if not hasil:
        return "Hewan tidak ditemukan", 404
    return render_template('detail_hewan.html', hasil=hasil)

@views.route("/cover")
def cover():
    return render_template("index.html")

@views.route('/pilih-hewan')
def pilih_hewan():
    return render_template('pilih_hewan.html')

@views.route('/kumpulan-darat')
def kumpulan_darat():
    # tampilkan halaman kumpulan hewan purba darat
    return render_template('kumpulan_darat.html')

@views.route('/kumpulan-laut')
def kumpulan_laut():
    # tampilkan halaman kumpulan hewan purba laut
    return render_template('kumpulan_laut.html')