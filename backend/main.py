from fastapi import FastAPI, Form
import json
from utils import check_is_dag

app = FastAPI()

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    parsed_pipeline = json.loads(pipeline)
    nodes = parsed_pipeline['nodes']
    edges = parsed_pipeline['edges']
    is_dag = check_is_dag(edges)
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag
    }
