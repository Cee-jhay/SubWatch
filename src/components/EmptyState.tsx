type Props = {
  icon?: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export default function EmptyState({
  icon = "📭",
  title,
  description,
  action,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

