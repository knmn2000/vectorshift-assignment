from collections import deque, defaultdict

def build_adjacency_list(edges):
    adj_list = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        source = edge['source']
        target = edge['target']
        adj_list[source].append(target)
        in_degree[target] += 1
        if source not in in_degree:
            in_degree[source] = 0

    return adj_list, in_degree

def topological_sort_kahn(edges):
    adj_list, in_degree = build_adjacency_list(edges)
    queue = deque([node for node in in_degree if in_degree[node] == 0])
    topo_order = []

    while queue:
        node = queue.popleft()
        topo_order.append(node)

        for neighbor in adj_list[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return len(topo_order) == len(in_degree)

def check_is_dag(edges):
    return topological_sort_kahn(edges)