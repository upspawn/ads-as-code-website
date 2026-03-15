type TreeNode = {
  label: string;
  type: "campaign" | "adgroup" | "keyword" | "ad" | "extension" | "adset" | "creative";
  children?: TreeNode[];
};

function TreeNodeRow({ node, depth = 0, isLast = false }: { node: TreeNode; depth?: number; isLast?: boolean }) {
  return (
    <>
      <div className="flex items-center font-mono text-[13px] leading-7">
        {depth > 0 && (
          <span className="text-[#C8C4BF] select-none" style={{ paddingLeft: (depth - 1) * 16 }}>
            {isLast ? "└─ " : "├─ "}
          </span>
        )}
        <span className={depth === 0 ? "font-medium text-text" : "text-text-muted"}>{node.label}</span>
      </div>
      {node.children?.map((child, i) => (
        <TreeNodeRow
          key={`${child.label}-${i}`}
          node={child}
          depth={depth + 1}
          isLast={i === (node.children?.length ?? 0) - 1}
        />
      ))}
    </>
  );
}

export function CampaignTree({ tree }: { tree: TreeNode }) {
  return (
    <div>
      <TreeNodeRow node={tree} />
    </div>
  );
}

export type { TreeNode };
