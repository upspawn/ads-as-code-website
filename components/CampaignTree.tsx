import { FadeIn } from "./FadeIn";

type TreeNode = {
  label: string;
  type: "campaign" | "adgroup" | "keyword" | "ad" | "extension" | "adset" | "creative";
  children?: TreeNode[];
};

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  campaign:  { bg: "bg-accent/8",     text: "text-accent",     border: "border-accent/20" },
  adgroup:   { bg: "bg-[#2563EB]/8",  text: "text-[#2563EB]",  border: "border-[#2563EB]/20" },
  adset:     { bg: "bg-[#2563EB]/8",  text: "text-[#2563EB]",  border: "border-[#2563EB]/20" },
  keyword:   { bg: "bg-[#16a34a]/8",  text: "text-[#16a34a]",  border: "border-[#16a34a]/20" },
  ad:        { bg: "bg-[#9333EA]/8",  text: "text-[#9333EA]",  border: "border-[#9333EA]/20" },
  creative:  { bg: "bg-[#9333EA]/8",  text: "text-[#9333EA]",  border: "border-[#9333EA]/20" },
  extension: { bg: "bg-[#ca8a04]/8",  text: "text-[#ca8a04]",  border: "border-[#ca8a04]/20" },
};

const typeLabels: Record<string, string> = {
  campaign: "Campaign",
  adgroup: "Ad Group",
  adset: "Ad Set",
  keyword: "Keyword",
  ad: "RSA Ad",
  creative: "Creative",
  extension: "Extension",
};

function TreeNodeRow({ node, depth = 0, isLast = false }: { node: TreeNode; depth?: number; isLast?: boolean }) {
  const style = typeStyles[node.type] || typeStyles.campaign;

  return (
    <>
      <div className="flex items-center gap-2" style={{ paddingLeft: depth * 24 }}>
        {depth > 0 && (
          <div className="text-code-border text-xs font-mono w-4 text-center">
            {isLast ? "└" : "├"}
          </div>
        )}
        <div className={`flex items-center gap-2 px-2.5 py-1 rounded-lg border ${style.bg} ${style.border}`}>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${style.text}`}>
            {typeLabels[node.type] || node.type}
          </span>
          <span className="text-sm text-text font-medium">{node.label}</span>
        </div>
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

export function CampaignTree({
  tree,
  title,
  delay = 0,
}: {
  tree: TreeNode;
  title?: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl border border-code-border bg-white p-5 shadow-sm">
        {title && (
          <div className="text-xs text-text-muted mb-3 font-mono">{title}</div>
        )}
        <div className="space-y-1.5">
          <TreeNodeRow node={tree} />
        </div>
      </div>
    </FadeIn>
  );
}

export type { TreeNode };
