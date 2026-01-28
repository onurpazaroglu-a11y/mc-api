# mc_api_server.py
from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

OLLAMA_API = "http://host.docker.internal:11434"  # Docker container'dan host'a erişim

class Message(BaseModel):
    text: str

@app.post("/api/message")
def get_response(msg: Message):
    payload = {"model": "llama2", "prompt": msg.text}
    try:
        resp = requests.post(f"{OLLAMA_API}/v1/generate", json=payload)
        return {"reply": resp.json()["completion"]}
    except Exception as e:
        return {"reply": f"AI hatası: {e}"}
