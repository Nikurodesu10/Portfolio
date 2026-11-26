# Portfolio

Personal portfolio site, served with Python (Flask).

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5000

## Project layout

| Path | What goes there |
| --- | --- |
| `app.py` | Flask app and routes |
| `templates/index.html` | The page (Jinja template) |
| `static/css/style.css` | All styles — CSS stays CSS, Flask just serves it |
| `static/js/main.js` | Browser interactions (modals, carousel, scroll reveal) |
| `static/images/` | Photos, project screenshots, certificates |
| `static/files/` | Resume PDF |

Reference static files in templates with `{{ url_for('static', filename='css/style.css') }}`.
