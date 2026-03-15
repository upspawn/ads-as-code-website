type TreeNode = {
  label: string;
  type: "campaign" | "adgroup" | "keyword" | "ad" | "extension" | "adset" | "creative";
  children?: TreeNode[];
};

const typeColors: Record<string, string> = {
  campaign:  "text-accent",
  adgroup:   "text-[#2563EB]",
  adset:     "text-[#2563EB]",
  keyword:   "text-[#16a34a]",
  ad:        "text-[#9333EA]",
  creative:  "text-[#9333EA]",
  extension: "text-[#ca8a04]",
};

function TreeNodeRow({ node, depth = 0, isLast = false }: { node: TreeNode; depth?: number; isLast?: boolean }) {
  const color = typeColors[node.type] || "text-text";

  return (
    <>
      <div className="flex items-center font-mono text-[13px] leading-6">
        {/* Indentation guides */}
        {depth > 0 && (
          <span className="text-[#D4D0CC] select-none" style={{ paddingLeft: (depth - 1) * 16 }}>
            {isLast ? "└─ " : "├─ "}
          </span>
        )}
        <span className={`${color} font-medium`}>{node.label}</span>
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
